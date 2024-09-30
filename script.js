// ----------------------------------------
// HTML elements to save
// ----------------------------------------

// The form overall
const passwordGeneratorForm = document.getElementById(
  "password-generator-form"
);

// Key elements

// Output elements (the generated password and ability to copy it)
const outputTextElement = document.getElementById("output-text");
const outputCopyIcon = document.getElementById("output-copy-icon");
const outputCopySuccess = document.getElementById("output-copy-success");

// Input elements (password options)
const characterLengthOutput = document.getElementById(
  "character-length-output"
);
const characterLengthSlider = document.getElementById(
  "character-length-slider"
);

const checkboxOptions = document.querySelectorAll('input[type="checkbox"]');

// Output evaluation elements (assess the password strength)
const strengthEvalLevels = document.querySelectorAll(".strength-eval__level");

// Submit elements (the generate new password button)
const generateButtonElement = document.getElementById("generate-button");

let charactersAllowed = "";

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

const passwordCharacterOptions = [
  {
    checkboxId: "include-uppercase",
    name: "uppercase",
    include: true,
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  {
    checkboxId: "include-lowercase",
    name: "lowercase",
    include: true,
    characters: "abcdefghijklmnopqrstuvwxyz",
  },
  {
    checkboxId: "include-numbers",
    name: "numbers",
    include: true,
    characters: "0123456789",
  },
  {
    checkboxId: "include-symbols",
    name: "symbols",
    include: true,
    characters: `~!@#$%^&*()_-+={[}]|:;<,>.?/`,
  },
];

const generateNewPassword = (length, charactersAllowed) => {
  if (length <= 0) return false;
  if (charactersAllowed == "") return false;

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

const zxcvbnStrengthScores = {
  0: { label: "too guessable", myScore: 0 },
  1: { label: "very guessable", myScore: 0 },
  2: { label: "somewhat guessable", myScore: 1 },
  3: { label: "safely unguessable", myScore: 2 },
  4: { label: "very unguessable", myScore: 3 },
};

const strengthLabels = {
  0: "too-weak", // 0 - Too Weak!
  1: "weak", // 1 - Weak
  2: "medium", // 2 - Medium
  3: "strong", // 3 - Strong
};

const evaluatePasswordStrength = (password) => {
  //return getRandomInt(4);
  return zxcvbnStrengthScores[zxcvbn(password).score].myScore;
};

const showStrengthEval = (strength, labels) => {
  strengthEvalLevels.forEach((level) => {
    if (!level.classList.contains("strength-eval__level--hide")) {
      level.classList.add("strength-eval__level--hide");
    }
    if (level.classList.contains("strength-eval__level--" + labels[strength])) {
      level.classList.remove("strength-eval__level--hide");
    }
  });
};

const setCharacterLength = () => {
  characterLengthOutput.textContent = characterLengthSlider.value;
};

const setPasswordOptions = () => {
  checkboxOptions.forEach((checkbox) => {
    passwordCharacterOptions.find(
      (el) => el.checkboxId == checkbox.id
    ).include = checkbox.checked;
  });

  // passwordCharacterOptions
  charactersAllowed = passwordCharacterOptions
    .filter((el) => el.include)
    .map((x) => x.characters)
    .join();
};

const copyPasswordToClipboard = (password) => {
  if (password == "") {
    //console.log("Copying: (nothing to copy)");
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
      //console.log("Copied password: " + password);
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

const initializeForm = () => {
  setCharacterLength();
  setPasswordOptions();
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
  setCharacterLength();
};

const handleSubmit = (e) => {
  e.preventDefault();

  //console.log(generateASCIICharacters(33, 126));

  setPasswordOptions();
  let newPassword = generateNewPassword(
    Number(characterLengthSlider.value),
    charactersAllowed
  );
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

const handlePageLoad = (e) => {
  initializeForm();
};

// ----------------------------------------
// Add event listeners to all input elements in the form
// ----------------------------------------

characterLengthSlider.addEventListener("input", handleSlider);
outputCopyIcon.addEventListener("click", handleCopy);

generateButtonElement.addEventListener("click", handleSubmit);
passwordGeneratorForm.addEventListener("submit", handleSubmit);

window.addEventListener("load", handlePageLoad);
