// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, { id }) {
  return await models.Reservation.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Product, as: 'product' },
    ]
  })
}

// Get subscription by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Reservation.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        { model: models.Product, as: 'product' },
      ]
    })
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
}

// Get all subscriptions
export async function getAll() {
  return await models.Reservation.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Product, as: 'product' },
    ]
  })
}

// Create subscription
export async function create(parentValue, { crateId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Reservation.create({
      crateId,
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Reservation.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}