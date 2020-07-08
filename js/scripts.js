/** Elements */
let brandEl = null;
let modelEl = null;
let versionEl = null;
let engineEl = null;
let clearEl = null;

/** Brands */
let brands = null;
/** Brand Models */
let models = null;
/** Model Versions */
let versions = null;
/** Version Engines */
let engines = null;

window.addEventListener('load', () => {
  brandEl = document.querySelector('#brand');
  modelEl = document.querySelector('#model');
  versionEl = document.querySelector('#version');
  engineEl = document.querySelector('#engine');
  clearEl = document.querySelector('#clear');
    
  brandEl.addEventListener('change', handleBrand);
  modelEl.addEventListener('change', handleModel);
  versionEl.addEventListener('change', handleVersion);
  clearEl.addEventListener('click', clearForm);
});

function handleBrand() {
  if (brandEl.value !== 'Selecione') {
    modelEl.removeAttribute("disabled");

    models = data.map(item => {
      if(item.name === brandEl.value) {
        return item.models;
      } 
    });
    
    modelEl.innerHTML = '<option value="Selecione">Selecione</option>';
    models[0].forEach(item => {
      let option = document.createElement("option");
      option.innerHTML = item.name;
      modelEl.appendChild(option);
    });
    return;
  }

  modelEl.setAttribute("disabled", 'true');
  versionEl.setAttribute("disabled", 'true');
  engineEl.setAttribute("disabled", 'true');
  return;
}

function handleModel() {
  if (modelEl.value !== 'Selecione') {
    versionEl.removeAttribute("disabled");
    
    versions = models[0].map(model => {
      if (model.name === modelEl.value) {
        return model.versions;
      }
    });
    
    versionEl.innerHTML = '<option value="Selecione">Selecione</option>';
    versions[0].forEach(item => {
      let option = document.createElement("option");
      option.innerHTML = item.name;
      versionEl.appendChild(option);
    });
    
    return;
  }

  versionEl.setAttribute("disabled", "true");
  engineEl.setAttribute("disabled", "true");
  return;
}

function handleVersion() {
  if (versionEl.value !== 'Selecione') {
    engineEl.removeAttribute("disabled");
    console.log(versions[0]);
    
    engineEl.innerHTML = '<option value="Selecione">Selecione</option>';
    engines = versions[0].map(item => {
      if (item.name === versionEl.value) {
        return item.engines;
      }
    });
    
    console.log(engines);

    engines[0].forEach(item => {
      let option = document.createElement("option");
      option.innerHTML = item;
      engineEl.appendChild(option);
    });

    return;
  }

  engineEl.setAttribute("disabled", "true");
  return;
}

function clearForm(e) {
  e.preventDefault();
  modelEl.setAttribute("disabled", "true");
  versionEl.setAttribute("disabled", "true");
  engineEl.setAttribute("disabled", "true");
  brandEl.value = "Selecione";
}
