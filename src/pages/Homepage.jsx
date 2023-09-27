import React, { Component, Fragment, createRef } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import ToDoform from "../components/Form/ToDoform";
import Header from "../components/Header/Header";
import ToDocard from "../components/Cards/ToDocard";
import Footer from "../components/Footer/Footer";

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.searchRef = createRef();

    this.state = {
      activeTab: "all",
      contacts: [
        {
          firstName: "John",
          lastName: "Doe",
          categories: "relative",
          phone: "+998990001122",
          liked:false
        },
        {
          firstName: "Doe",
          lastName: "John",
          categories: "family",
          phone: "+998998884466",
          liked:false
        },
        {
          firstName: "Mr",
          lastName: "Who",
          categories: "other",
          phone: "+998990001122",
          liked:true
        },
      ],
      contact: {
        firstName: "",
        lastName: "",
        categories: "family",
        phone: "",
        liked:false
      },
    };
  }

  render() {
    const { activeTab, contacts, contact } = this.state;
    // console.log(contact);
    const handleSearch = () => {
      console.log(this.searchRef.current.value);
    };

    const changeTab = (key) => {
      this.setState({ activeTab: key });
    };

    const handleContact = (e) => {
      // console.log(e.target.id);
      // console.log(e.target.value);
      this.setState({contact: {...contact, [e.target.id]: e.target.value}})
    }

    // console.log(contact);

     const submitForm = (e) => {
       e.preventDefault();
      //  console.log(e.target.firstName.value);
      //  console.log(e.target.lastName.value);
      //  console.log(e.target.categories.value);
      //  console.log(e.target.phone.value);

       let newContact = [...contacts, contact]
       this.setState({
         contacts: newContact,
         contact: {
           firstName: "",
           lastName: "",
           categories: "family",
           phone: "",
           liked:false
         },
       });
     };


     let likedContacts = contacts.filter((el) => el.liked)
     let notLikedContacts = contacts.filter((el) => !el.liked)

    return (
      <Fragment> 
        <Container>
          <ToDoform
            submitForm={submitForm}
            contact={contact}
            handleContact={handleContact}
          />
          <Header searchFunc={handleSearch} searchRef={this.searchRef} />
          <Tabs
            activeKey={activeTab}
            onSelect={changeTab}
            className="mb-3"
            variant="pills"
            fill
          >
            <Tab eventKey="all" title="All">
              {notLikedContacts.map((el, i) => (
                <ToDocard contacts={contacts} key={i} {...el} />
              ))}
            </Tab>
            <Tab eventKey="favorites" title="Favorites">
              {likedContacts.map((el, i) => (
                <ToDocard liked={likedContacts} contacts={contacts} key={i} {...el} />
              ))}
            </Tab>
          </Tabs>
          <Footer />
        </Container>
      </Fragment>
    );
  }
}

export default Homepage;

///hdiuegiu3fiuegfuesbefeiufehduyddhuevdyeeydhedyege
//oh93gei3riu43ghwhdhued hegvdue d eugdveud eguvdeudveuye2 duvd
