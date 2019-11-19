import Component from '@ember/component';

export default Component.extend({

  actions: {
    showAlert(){
      this.toggleProperty("isEntered");
    }
  }
});
