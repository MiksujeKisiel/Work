import React from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, DeleteButton, Input } from "../../Form";
import * as actions from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FormWrapper } from "./ProfileStyles";
import styled from "styled-components";

const ArrayWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${768}px) {
    grid-template-columns: 250px 250px;
    gap: 0 15px;
    max-width: none;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 335px 335px;
    gap: 0 20px;
  }
  @media (min-width: ${1280}px) {
    grid-template-columns: 265px 265px 265px;
  }
  @media (min-width: ${1440}px) {
    grid-template-columns: 270px 270px 270px;

    @media (min-width: ${1600}px) {
      grid-template-columns: 285px 285px 285px;
    }
  }
`;
const FieldArrayWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;


const Skills = () => {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);
  
  return (
    <Formik
      initialValues={{
        skills: firebase.profile.skills,
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(actions.editSkills(values));
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, values, errors, touched }) => (
        <FormWrapper>
          <FieldArray
            name="skills"
            render={(arrayHelpers) => (
              <div>
                <ArrayWrapper>
                  {values.skills && values.skills.length > 0 ? (
                    values.skills.map((skills, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          type="Umiejętności"
                          name={`skills.${index}.name`}
                          component={Input}
                        />
                        <DeleteButton
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <></>
                  )}
                </ArrayWrapper>
                <Button profile onClick={() => arrayHelpers.push("")}>
                  Dodaj język
                </Button>
              </div>
            )}
          />
          <Button disabled={!isValid || isSubmitting} profile type="submit">
            Edytuj
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
};

const ProfileSchema = Yup.object().shape({
  skills: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(2, "too short").required("Required"),
    })
  ),
});

export default Skills;
