

// ── API helper ─────────────────────────────────
async function api(url, method = "GET", body = null) {
  const opts = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

// ── HTML escaping ──────────────────────────────
function esc(str) {
  if (!str) return "";
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ── Star rendering ─────────────────────────────
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    "&#x2605;".repeat(full) +
    (half ? "&#x2BEA;" : "") +
    '<span class="empty">' +
    "&#x2606;".repeat(empty) +
    "</span>"
  );
}

// ── Toast notifications ────────────────────────
function toast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `${type === "success" ? "&#x2705;" : "&#x274C;"} ${esc(message)}`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateX(100%)";
    t.style.transition = "all .3s";
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

// ── Modal helpers ──────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// Close modal on overlay click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});

// ── Load users into a select dropdown ──────────
async function loadUsersIntoSelect(selectId) {
  try {
    const res = await fetch("/api/export/users");
    const data = await res.json();
    const select = document.getElementById(selectId);
    // Keep existing options if we've already loaded
    select.innerHTML = "";
    (data.data || []).forEach((u) => {
      const opt = document.createElement("option");
      opt.value = u._id;
      opt.textContent = `${u.firstName} ${u.lastName} (${u.email})`;
      select.appendChild(opt);
    });
  } catch (e) {
    console.error("Failed to load users:", e);
  }
}
