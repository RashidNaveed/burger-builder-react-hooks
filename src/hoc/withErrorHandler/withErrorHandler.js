import React, { useState, useEffect } from "react";
import ShowModal from "../../components/UI/Modal/ShowModal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [errorMessage] = useState("oops error...");

    const reqInterceptors = axios.interceptors.request.use((req) => {
      setError(null);
      setModal(false);
      return req;
    });
    const resInterceptors = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
        setModal(true);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptors);
        axios.interceptors.response.eject(resInterceptors);
      };
    }, [reqInterceptors, resInterceptors]);

    const errorConfirmHandler = () => {
      setError(null);
      setModal(false);
    };

    return (
      <React.Fragment>
        <ShowModal
          modal={modal}
          toggle={errorConfirmHandler}
          title={errorMessage}
        >
          {error ? error.message : null}
        </ShowModal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
