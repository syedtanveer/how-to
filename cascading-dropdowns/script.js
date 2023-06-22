const subjectObject = {
  "Front-end": {
    HTML: ["Links", "Images", "Tables", "Lists"],
    CSS: ["Borders", "Margins", "Backgrounds", "Float"],
    JavaScript: ["Variables", "Operators", "Functions", "Conditions"],
  },
  "Back-end": {
    PHP: ["Variables", "Strings", "Arrays"],
    SQL: ["SELECT", "UPDATE", "DELETE"],
  },
};

const subjectsSelect = document.getElementById("subjects");
const topicsSelect = document.getElementById("topics");
const chaptersSelect = document.getElementById("chapters");

for (let key in subjectObject) {
  // creates new options and put them at last
  subjectsSelect.options[subjectsSelect.options.length] = new Option(key, key);
}

subjectsSelect.onchange = function() {
    // reset both selects
    topicsSelect.options.length = 1;
    chaptersSelect.options.length = 1;

    for(key in subjectObject[this.value]) {
        topicsSelect.options[topicsSelect.options.length] = new Option(key, key);
    }
}

topicsSelect.onchange = function() {
    // reset chapter select
    chaptersSelect.options.length = 1;
    const chapters = subjectObject[subjectsSelect.value][this.value];
    for(let i = 0; i< chapters.length; i++) {
        chaptersSelect.options[chaptersSelect.options.length] = new Option(chapters[i], chapters[i]);
    }
}