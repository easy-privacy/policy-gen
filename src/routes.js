import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PolicyGeneratorWrapper from './components/PolicyGeneratorWrapper';
import FinalPolicyDocument from './components/FinalPolicyDocument';
import DpdpFaqs from './components/DpdpFaqs';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/policy-generator" component={PolicyGeneratorWrapper} />
        <Route path="/final-policy-document" component={FinalPolicyDocument} />
        <Route path="/dpdp-faqs" component={DpdpFaqs} />
      </Switch>
    </Router>
  );
};

export default Routes;
