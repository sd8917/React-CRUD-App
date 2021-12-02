import React from 'react';


class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
        phone: ""
    }
    add = (e) => {
        e.preventDefault();

        if(this.state.name === "" || this.state.email === '' || this.state.phone === ''){
            alert("Empty fiels not Allowed !!")
        }

        this.props.addContactHandler(this.state);
        this.setState({name:"", email:"",phone:""})
    }

    render() {
        return <div class="ui main">
            <h2>Add Contact</h2>

            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" placeholder="Name .. " name="name"
                        onChange={(e) => {
                            this.setState({ name: e.target.value })
                        }}
                        value={this.state.name} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="Email .. " name="email"
                        onChange={(e) => {
                            this.setState({ email: e.target.value })
                        }}
                        value={this.state.email}
                    />
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input type="number" placeholder="Phone .. " name="phone"
                        onChange={(e) => {
                            this.setState({ phone: e.target.value })
                        }}
                        value={this.state.phone} />

                </div>


                <button className="ui button blue">Add</button>
            </form>
        </div>;
    }
}

export default AddContact;