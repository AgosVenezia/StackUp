import get from 'lodash/get'
import axios from 'axios'

import { getAPIHostname } from './apiTarget'

export interface CreateMockPushPaymentPayload {
  trackingRef: string
  beneficiaryBank: {
    accountNumber: string
  }
  amount: {
    amount: string
    currency: string
  }
}

export interface CreateMockChargebackPayload {
  paymentId: string
}

export interface CreateMockACHBankAccount {
  account: {
    accountNumber: string
    routingNumber: string
    description: string
  }
  balance: {
    amount: string
    currency: string
  }
}

const instance = axios.create({
  baseURL: getAPIHostname(),
})

/**
 * Global error handler:
 * Intercepts all axios reponses and maps
 * to errorHandler object
 */
instance.interceptors.response.use(
  function (response) {
    if (get(response, 'data.data')) {
      return response.data.data
    }
    return response
  },
  function (error) {
    let response = get(error, 'response')
    if (!response) {
      response = error.toJSON()
    }
    return Promise.reject(response)
  }
)

/** Returns the axios instance */
function getInstance() {
  return instance
}

/**
 * Trigger arrival of an incoming wire
 * @param {*} payload
 */
function createMockWirePayment(payload: CreateMockPushPaymentPayload) {
  const url = '/v1/mocks/payments/wire'
  return instance.post(url, payload)
}

/**
 * Trigger a mock sen payment
 * @param {*} payload
 */
function createMockSenPayment(payload: CreateMockPushPaymentPayload) {
  const url = '/v1/mocks/payments/sen'
  return instance.post(url, payload)
}

/**
 * Trigger a mock sepa payment
 * @param {*} payload
 */
function createMockSEPAPayment(payload: CreateMockPushPaymentPayload) {
  const url = '/v1/mocks/payments/sepa'
  return instance.post(url, payload)
}

/**
 * Create a mock chargeback
 * @param {*} payload
 */
function createMockChargeback(payload: CreateMockChargebackPayload) {
  const url = '/v1/mocks/cards/chargebacks'
  return instance.post(url, payload)
}

/**
 * Create a mock ACH bank account
 * @param {*} payload
 */
function createMockACHBankAccount(payload: CreateMockACHBankAccount) {
  const url = '/v1/mocks/ach/accounts'
  return instance.post(url, payload)
}

export default {
  getInstance,
  createMockWirePayment,
  createMockSenPayment,
  createMockSEPAPayment,
  createMockChargeback,
  createMockACHBankAccount,
}
