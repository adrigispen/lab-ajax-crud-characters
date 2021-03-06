class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then(response => {
        let parent = document.getElementById("chars-container");
        parent.innerHTML = "";
        for (var i = 0; i < response.data.length; i++) {
          let div = document.createElement("div");
          div.innerHTML = `
            <div class="id">Id: <span>${response.data[i].id}</span></div>
            <div class="name">Name: <span>${response.data[i].name}</span></div>
            <div class="occupation">Occupation: <span>${
              response.data[i].occupation
            }</span></div>
            <div class="cartoon">Is a cartoon? <span>${
              response.data[i].cartoon
            }</span></div>
            <div class="weapon">Weapon: <span>${
              response.data[i].weapon
            }</span></div>`;
          div.classList.add("character-info");
          parent.appendChild(div);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then(character => {
        let parent = document.getElementById("chars-container");
        parent.innerHTML = "";
        let div = document.createElement("div");
        div.innerHTML = `
          <div class="id">Id: <span>${character.data.id}<span></div>
          <div class="name">Name: <span>${character.data.name}<span></div>
          <div class="occupation">Occupation: <span>${
            character.data.occupation
          }<span></div>
          <div class="cartoon">Is a cartoon? <span>${
            character.data.cartoon
          }<span></div>
          <div class="weapon">Weapon: <span>${
            character.data.weapon
          }<span></div>`;
        div.classList.add("character-info");
        parent.appendChild(div);
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOneRegister(character) {
    axios
      .post(this.BASE_URL + "/characters", character)
      .then(response => {
        document.getElementById("send-data").classList.add("active");
      })
      .catch(err => {
        document.getElementById("send-data").classList.add("error");
        console.log(err);
      });
  }

  updateOneRegister(id, character) {
    axios
      .put(this.BASE_URL + `/characters/${id}`, character)
      .then(response => {
        document.getElementById("send-update").classList.add("active");
      })
      .catch(err => {
        document.getElementById("send-update").classList.add("error");
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + `/characters/${id}`)
      .then(response => {
        document.getElementById("delete-one").classList.add("active");
      })
      .catch(err => {
        document.getElementById("delete-one").classList.add("error");
        console.log(err);
      });
  }
}
