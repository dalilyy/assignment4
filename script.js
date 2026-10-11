"use strict";

// Tasks 0–2 use the browser's built-in validation.
// The submit event fires only after native validation passes.
document.querySelectorAll(".demo-form").forEach((form) => {
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    status.textContent =
      "Demo submission completed. No data was sent to a server.";
    status.classList.add("text-success");
  });

  form.addEventListener("input", () => {
    status.textContent = "";
  });
});

// Tasks 3–4 use explicit Bootstrap validation classes.
document.querySelectorAll(".custom-validation").forEach((form) => {
  const fields = Array.from(
    form.querySelectorAll("input:not([type='checkbox']), textarea, select")
  );

  const status = form.querySelector(".form-status");
  let submitted = false;

  function updateCustomRules() {
    fields.forEach((field) => {
      field.setCustomValidity("");

      // Reject names and messages containing only spaces.
      if (
        (field.type === "text" || field.tagName === "TEXTAREA") &&
        field.required &&
        field.value.length > 0 &&
        field.value.trim().length === 0
      ) {
        field.setCustomValidity("Please enter more than spaces.");
      }
    });

    const password = form.querySelector("#password");
    const confirmation = form.querySelector("#confirmPassword");

    if (password && confirmation) {
      if (
        confirmation.value !== "" &&
        confirmation.value !== password.value
      ) {
        confirmation.setCustomValidity("Passwords do not match.");
      }
    }
  }

  function showFieldState(field) {
    const valid = field.validity.valid;

    field.classList.toggle("is-valid", valid);
    field.classList.toggle("is-invalid", !valid);
    field.setAttribute("aria-invalid", String(!valid));
  }

  function showGenderState() {
    const feedback = form.querySelector("#gender-feedback");

    if (!feedback) return;

    const selected = form.querySelector('input[name="gender"]:checked');

    feedback.textContent = selected
      ? "Looks good!"
      : "Please select a gender option.";

    feedback.classList.toggle("text-success", Boolean(selected));
    feedback.classList.toggle("text-danger", !selected);
  }

  function showAllStates() {
    fields.forEach(showFieldState);
    showGenderState();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitted = true;

    updateCustomRules();
    showAllStates();

    if (!form.checkValidity()) {
      status.textContent = "Please correct the highlighted fields.";
      status.classList.remove("text-success");
      status.classList.add("text-danger");

      const firstInvalid = fields.find((field) => !field.validity.valid);
      if (firstInvalid) firstInvalid.focus();

      return;
    }

    status.textContent =
      form.id === "registration"
        ? "Registration validation passed! Demo only: no account was created."
        : "Message validation passed! Demo only: no message was sent.";

    status.classList.remove("text-danger");
    status.classList.add("text-success");
  });

  function handleEdit() {
    status.textContent = "";
    updateCustomRules();

    if (submitted) {
      showAllStates();
    }
  }

  form.addEventListener("input", handleEdit);
  form.addEventListener("change", handleEdit);

  form.addEventListener("reset", () => {
    submitted = false;
    status.textContent = "";
    status.classList.remove("text-success", "text-danger");

    fields.forEach((field) => {
      field.classList.remove("is-valid", "is-invalid");
      field.removeAttribute("aria-invalid");
      field.setCustomValidity("");
    });

    const feedback = form.querySelector("#gender-feedback");

    if (feedback) {
      feedback.textContent = "";
      feedback.classList.remove("text-success", "text-danger");
    }
  });
});