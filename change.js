AFRAME.registerComponent("change", {
    schema: {
        rotation: { type: "number", default: -0.5 },
    },
    tick: function () {
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if (this.data.clickCounter === 1) {
                const rotation = { x: 0, y: 20, z: 100 };
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 2) {
                const rotation = { x: 0, y: 140, z: 0 };
                this.el.setAttribute("rotation", rotation);
            }
        });
        var rot = this.el.getAttribute("rotation");
        rot.y = rot.y + this.data.rotation;
        this.el.setAttribute("rotation", { x: rot.x, y: rot.y, z: rot.z })
    }
});