import {state} from "./state";
import {courses} from "../data/courses.js";
// var coursesDB = require("../data/courses.js");

const $elements = {
  modal: null,
  header: null,
  input: null,
  saveBtn: null
}

let scope = {
  date: null,
  callback: null
}

const template = `
  <section class="event-modal">
    <div class="cover" />
    <div class="content">
      <div class="data">
        <h3>Create event on <span></span></h3>
        <select class="select" name="select2" id="select_courses"></select>
      </div>
      <footer>
        <button class="cancel">Cancel</button>
        <button class="primary">Save</button>
      </footer>
    </div>
  </section>
`;

export function initEventModal() {
  state.$element.insertAdjacentHTML('beforeend', template);
  $elements.modal = document.querySelector("section.event-modal");
  $elements.header = $elements.modal.querySelector("h3");
  $elements.input = $elements.modal.querySelector("select");
  SetDataSelectCourses();

  $elements.modal.querySelector(".cancel").addEventListener("click", hideEventModal);
  $elements.modal.querySelector(".primary").addEventListener("click", save);
  $elements.input.addEventListener("keyup", ev => {
    if (ev.key === "Enter") {
      save();
    }
  })
}

export function showEventModal(date, callback) {
  $elements.header.querySelector("span").innerHTML = date;
  $elements.modal.style.display = "block";
  
  $elements.input.value = "";
  $elements.input.focus();

  scope.date = date;
  scope.callback = callback;
}

export function save() {
  const value = $elements.input.value;
  if (!value) return;

  scope.callback(value);
  hideEventModal();
}

export function hideEventModal() {
  $elements.modal.style.display = "none";
}

export function SetDataSelectCourses(){
  const SelectCourses = document.getElementById("select_courses")

  Object.keys(courses).map(function(k){
    var option = document.createElement('option')
    option.setAttribute('value', courses[k].name)
    option.innerText = courses[k].name
    SelectCourses.appendChild(option)
    console.log(SelectCourses)
    console.log(option)
  })
}
