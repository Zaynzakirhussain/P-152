AFRAME.registerComponent("base", {
    schema: {
        radius: { type: "number", default: 10 },
        height: { type: "number", default: 0.1 }
    },
    tick: function () {
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material", { color: "red"})
    }
});