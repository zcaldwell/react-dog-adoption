import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select().order('name');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updateDog(dog) {
  const resp = await client.from('dogs').update(dog).eq('id', dog.id);
  return checkError(resp);
}

export async function deleteDog(dog) {
  const resp = await client.from('dogs').delete().eq('id', dog.id);
  return checkError(resp);
}

export async function addDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}
