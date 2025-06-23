const form = document.getElementById("email-form");
const response = document.getElementById("response");

const supabaseUrl = 'https://izdfthpgxwspeazddhau.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZGZ0aHBneHdzcGVhemRkaGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTA1MzgsImV4cCI6MjA2NTA2NjUzOH0.IRMUg-eu-I7aHD3hCns8TlPQxSzKUhWqZ5Uz40LaXzk'

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;

  const res = await fetch(supabaseUrl + "/rest/v1/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseAnonKey,
      "Authorization": "Bearer " + supabaseAnonKey,
    },
    body: JSON.stringify({ email })
  });

  if (res.status === 201) {
    response.textContent = "✅ Thanks! You'll be notified.";
  } else if (res.status === 409) {
    response.textContent = "⚠️ You've already signed up!";
  } else {
    response.textContent = "❌ Something went wrong. Please try again.";
  }

  form.reset();
});
