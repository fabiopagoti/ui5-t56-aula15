sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ovly.ui5navegacao.controller.Categorias", {

            onItemPress: function (oEvent) {
                var oListItem = oEvent.getParameters().listItem;
                var oContext = oListItem.getBindingContext();
                var oCategory = oContext.getObject();

                var oRouter = this.getOwnerComponent().getRouter();
                var oParameterosDaRota = {
                    id: oCategory.ID // $metadata
                }
                oRouter.navTo("detalhe", oParameterosDaRota);
            },

            onAdd: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("novaCategoria");
            }
        });
    });
