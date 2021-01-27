import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Message, Button, Input } from "../../components/Form";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  max-width: 1100px;
  @media (min-width: ${768}px) {
    margin-left: 50px;
  }
  @media (min-width: ${1440}px) {
    margin-left: 150px;
  }
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
`;
const Text = styled.p`
  max-width: 1100px;
  font-size: 15px;
  margin-bottom: 50px;
`;

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
});
const Profile = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  if (!firebase.profile.isLoaded) return null;

  return (
    <Router>
      <Wrapper>
        <TopText
          bigText="Profil"
          smallText="Dzięki dodawaniu informacji na swój temat możesz łatwiej znaleźć pracę!"
        />
        <Formik
          initialValues={{
            firstName: firebase.profile.firstName,
            lastName: firebase.profile.lastName,
            location: firebase.profile.location,
            age: firebase.profile.age,
            email: firebase.profile.email,
            phone: firebase.profile.phone,
            payment: firebase.profile.payment,
            experience: firebase.profile.experience, //array
            education: firebase.profile.education, //array
            languages: firebase.profile.languages, //array
            skills: firebase.profile.skills, //array
            certificates: firebase.profile.certificates, //array
            hobby: firebase.profile.hobby, //array
            links: firebase.profile.links, //array
            userType: firebase.profile.userType, //option
            // show: firebase.profile.show, //boolean
          }}
          validationSchema={ProfileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await editProfileTwo(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <FormWrapper>
              <BigText>Edytuj swój profil, żeby łatwiej znaleźć pracę!</BigText>
              <Text></Text>
              <Field
                word="Imię"
                type="text"
                name="firstName"
                component={Input}
              />
              <Field
                word="Nazwisko"
                type="text"
                name="lastName"
                component={Input}
              />
                      <Field
                word="Miejsce zamieszkania"
                type="text"
                name="location"
                component={Input}
              />
                      <Field
                word="Data urodzenia"
                type="text"
                name="age"
                component={Input}
              />
                 <Field word="E-mail" type="text" name="email" component={Input} />
                 <Field word="Numer telefonu" type="text" name="phone" component={Input} />
                 <Field word="oczekiwana płaca" type="text" name="payment" component={Input} />
                 <Field
                word="Pracownik"
                type="text"
                name="userType"
                component={Input}
              />
              <Field word="Hobby" type="text" name="hobby" component={Input} />
              <Field
                word="Doświadczenie"
                type="text"
                name="experience"
                component={Input}
              />
           <Field
                word="Języki"
                type="text"
                name="languages"
                component={Input}
              />
              <Field
                word="Umiejętności"
                type="text"
                name="skills"
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Edytowanie" : null}
                type="submit"
              >
                Edytuj
              </Button>
            </FormWrapper>
          )}
        </Formik>
        <Message error show={error}>
          {error}
        </Message>
        <Message error show={error === false}>
          Profile updated
        </Message>
      </Wrapper>
    </Router>
  );
};


const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfileTwo: actions.editProfileTwo,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);