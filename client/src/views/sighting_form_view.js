const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBird = this.createNewBird(evt.target);
  console.log(newBird);
  PubSub.publish('SightingView:sighting-submitted', newBird);
  evt.target.reset();
}

SightingFormView.prototype.createNewBird = function(formInfo){
  const newBird = {
    species: formInfo.species.value,
    location: formInfo.location.value,
    date: formInfo.date.value
  }
  return newBird;
}

module.exports = SightingFormView;
