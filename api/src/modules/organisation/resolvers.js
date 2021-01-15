// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get crate by ID
export async function getById(parentValue, { id }) {
  const organisation = await models.Organisation.findOne({ where: { id } })

  if (!organisation) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return organisation
  }
}

// Get all crates
export async function getAll(parentValue, { orderBy }) {
  return await models.Organisation.findAll({ order: [['id', orderBy]] })
}

// Create crate
export async function create(parentValue, { name, description, organisationTypeId }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Organisation.create({
      name,
      description,
      organisationTypeId
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update crate
export async function update(parentValue, { id, name, description, organisationTypeId }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Organisation.update(
      {
        name,
        description,
        organisationTypeId
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete crate
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Organisation.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
