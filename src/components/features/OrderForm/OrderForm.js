import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  return (
    <Grid>
      <Row>
        {pricing.map(price => {
          console.log(price);
          return(
            <Col md={4} key={price.id} >
              <OrderOption {...price} currentValue={options[price.id]} setOrderOption={setOrderOption}/>
            </Col>
          );
        })}
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
  setOrderOption: PropTypes.func,
};

export default OrderForm;
