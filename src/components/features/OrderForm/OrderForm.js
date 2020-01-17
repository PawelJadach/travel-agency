import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings';
import formatPrice from '../../../utils/formatPrice';
import calculateTotal from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button';


const sendOrder = (options, tripCost, tripName, tripId) => {

  if(options.name !== '' && options.contact !== '') {
    const totalCost = formatPrice(calculateTotal(tripCost, options));

    const payload = {
      ...options,
      totalCost,
      tripName,
      tripId,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else console.log('wypełnij pola kontakt i name!');
};

const OrderForm = ({ tripCost, options, setOrderOption, tripName, tripId}) => {
  //console.log(options);
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text='Trip options' />
        </Col>
        {pricing.map(price => {
          //console.log(price);
          return(
            <Col md={4} key={price.id} >
              <OrderOption {...price} currentValue={options[price.id]} setOrderOption={setOrderOption}/>
            </Col>
          );
        })}
        <Col xs={12}>
          <OrderSummary cost={tripCost} opt={options}/>
        </Col>
      </Row>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId)}>Order now!</Button>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  options: PropTypes.Node,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
