function AppInit(fabric) {

    this.init = function () {
        fabric.debug("gotoRoute loginPage");
        fabric.gotoLogin();
    };

}

module.exports = AppInit;