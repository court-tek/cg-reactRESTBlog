import React, { Component } from "react";

let h3 = {
    margin: "50px 0",
    textAlign: "center",
    fontSize: "34px"
};

export default class Modal extends Component {
    render() {
        const showHideClassName = this.props.show
            ? "modal display-block"
            : "modal display-none";

        return (
            <section className={showHideClassName}>
                <div onClick={this.props.hideIt} className="menu-toggle">
                    <div className="hamburger" />
                </div>
                <form>
                    <h3 style={h3}>Add new task</h3>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Notes:</label>
                        <textarea />
                    </div>
                    <div className="form-group">
                      <button type="submit">Add New Task</button>
                    </div>
                </form>
            </section>
        );
    }
}
