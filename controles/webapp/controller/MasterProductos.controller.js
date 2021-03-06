sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter , FilterOperator) {

    return Controller.extend("ns.controles.controller.MasterProductos", {

        onInit: function () {

        },

        showSupplierName: function (oEvent) {

            var itemPressed = oEvent.getSource();
            //Si realiza un binding de elementos (binding de contexto) para un control, 
            //el uso de getBindingContext para un control nos devolverá los detalles de contexto que se aplicaron para un control.
            var oContext = itemPressed.getBindingContext("products_json");
            var objectContext = oContext.getObject();

            sap.m.MessageToast.show(objectContext.SupplierName);

        },





        onFilter: function () {
            var oJSON = this.getView().getModel("products_json").getData();
            var filters = [];
            if (oJSON.CurrencyCode !== "") {
                filters.push(new Filter("CurrencyCode", FilterOperator.EQ, oJSON.CurrencyCode))
            }

            if (oJSON.CurrencyCode !== "" && oJSON.CurrencyCode !== "undefined") {
                filters.push(new Filter("CurrencyCode", FilterOperator.EQ, oJSON.CurrencyCode))
            }

            if (oJSON.Description !== "" && oJSON.Description !== "undefined") {

                filters.push(new Filter("Description", FilterOperator.Contains, oJSON.Description.trim()))
            }

            var oList = this.getView().byId("idProductoTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(filters);
        },


        onClearFilter: function () {
            var oModel = this.getView().getModel("products_json").getData();
            oModel.setProperty("/CurrencyCode", "");
            oModel.setProperty("/Description", "");
        },

    });
}); 