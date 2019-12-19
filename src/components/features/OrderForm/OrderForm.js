import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = ({ tripCost, options }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text='Trip options' />
          <OrderSummary cost={tripCost} opt={options}/>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.Node,
};

export default OrderForm;
