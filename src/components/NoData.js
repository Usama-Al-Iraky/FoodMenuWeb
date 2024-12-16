import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NoData = () => {
  return (
    <Row>
        <Col>
        <h2 className='text-black-50 text-center pt-5 mt-5 fs-1 fw-bold' >No Data Found</h2>
        </Col>
    </Row>
  )
}

export default NoData
