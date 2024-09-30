// ----------------------------------------
// HTML elements to save
// ----------------------------------------

// The form overall
const passwordGeneratorForm = document.getElementById(
  "password-generator-form"
);

// Key elements
const outputTextElement = document.getElementById("output-text");
const outputCopyIcon = document.getElementById("output-copy-icon");
const outputCopySuccess = document.getElementById("output-copy-success");

const generateButtonElement = document.getElementById("generate-button");

const characterLengthOutput = document.getElementById(
  "character-length-output"
);
const characterLengthSlider = document.getElementById(
  "character-length-slider"
);

// Key groups of elements
const strengthEvalLevels = document.querySelectorAll(".strength-eval__level");

// ----------------------------------------
// Helper Functions
// ----------------------------------------

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// ----------------------------------------
// Functions
// ----------------------------------------

const generateASCIICharacters = (start = 33, end = 126) => {
  let result = "";

  for (let i = start; i <= end; i++) {
    result += String.fromCharCode(i);
  }

  return result;
};

const generateNewPassword = (length) => {
  //return "test";

  if (length <= 0) return false;

  const charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
  const charactersNumbers = "0123456789";
  const charactersSymbols = `~!@#$%^&*()_-+={[}]|:;<,>.?/`;

  const charactersAllowed =
    charactersUppercase +
    charactersLowercase +
    charactersNumbers +
    charactersSymbols;

  const charactersLength = charactersAllowed.length;

  let result = "";
  let counter = 0;

  while (counter < length) {
    result += charactersAllowed.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    counter += 1;
  }

  return result;
};

// validations for this specific form
const strengthLabels = {
  0: "too-weak",
  1: "weak",
  2: "medium",
  3: "strong",
};

const evaluatePasswordStrength = (password) => {
  // 0 - Too Weak!
  // 1 - Weak
  // 2 - Medium
  // 3 - Strong

  return getRandomInt(4);
};

const showStrengthEval = (strength, labels) => {
  strengthEvalLevels.forEach((level) => {
    //console.log(level.classList);
    //console.log(level.classList.contains("strength-eval__level--hide"));

    if (!level.classList.contains("strength-eval__level--hide")) {
      level.classList.add("strength-eval__level--hide");
    }

    //console.log("strength-eval__level--" + labels[strength]);
    if (level.classList.contains("strength-eval__level--" + labels[strength])) {
      level.classList.remove("strength-eval__level--hide");
    }
  });

  //console.log("Strength: " + labels[strength]);
};

const copyPasswordToClipboard = (password) => {
  if (password == "") {
    console.log("Copying: (nothing to copy)");
    return false;
  }

  // Check for permissions
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (!(result.state == "granted" || result.state == "prompt")) {
      console.error("Copying: Do not have permissions");
      return false;
    }
  });

  // Copy to cliphboard
  navigator.clipboard.writeText(password).then(
    () => {
      console.log("Copied password: " + password);
      /* Resolved - text copied to clipboard successfully */
      return true;
    },
    () => {
      console.error("Copy: Failed to copy");
      return false;
      /* Rejected - text failed to copy to the clipboard */
    }
  );
  return true;
};

const clearFocus = () => {
  if (document.activeElement && document.activeElement !== document.body) {
    document.activeElement.blur();
  }
};

// ----------------------------------------
// Event Listener Functions
// ----------------------------------------

const handleCopy = (e) => {
  //console.log("copy button: " + e.target.value);
  let currrentPassword = outputTextElement.value;

  if (copyPasswordToClipboard(currrentPassword)) {
    // Show success state
    outputCopySuccess.style.setProperty("visibility", "visible");
  }

  setTimeout(() => {
    // Clear success state
    outputCopySuccess.style.setProperty("visibility", "hidden");
    // Clear input focus
    clearFocus();
  }, 6000);
};

const handleSlider = (e) => {
  //console.log("slider: " + e.target.value);
  characterLengthOutput.textContent = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();

  //console.log("submitted");
  //console.log(generateASCIICharacters(33, 126));

  let newPassword = generateNewPassword(Number(characterLengthSlider.value));
  if (newPassword) {
    outputTextElement.value = newPassword;
    outputTextElement.disabled = false;
  }

  showStrengthEval(evaluatePasswordStrength(newPassword), strengthLabels);

  // The input will lose focus after 3 seconds
  setTimeout(() => {
    clearFocus();
  }, 3000);
};

// ----------------------------------------
// Add event listeners to all input elements in the form
// ----------------------------------------

characterLengthSlider.addEventListener("input", handleSlider);
outputCopyIcon.addEventListener("click", handleCopy);

generateButtonElement.addEventListener("click", handleSubmit);
passwordGeneratorForm.addEventListener("submit", handleSubmit);
