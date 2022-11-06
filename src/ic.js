import {gql, sudograph} from 'sudograph';

const {query, mutation} = sudograph({
  canisterId: import.meta.env.CANISTER_ID,
});

export const fetchItems = async () => {
  const result = await query(gql`
    query {
      readItem {
        id
        name
        image
        slotType
        slot
      }
    }
  `);
  console.log('fetchItems result', result);
  return result.data.readItem;
};

export const createItem = async ({name, image, slotType, slot}) => {
  const result = await mutation(
    gql`
      mutation (
        $name: String!
        $image: String!
        $slotType: String!
        $slot: String!
      ) {
        createItem(
          input: {name: $name, image: $image, slotType: $slotType, slot: $slot}
        ) {
          id
        }
      }
    `,
    {
      name,
      image,
      slotType,
      slot,
    },
  );
  const itemId = result.data?.createItem?.[0]?.id;
  console.log('createItem result', result, itemId);
  return !!itemId;
};

export const fetchUsers = async () => {
  const result = await query(gql`
    query {
      readItem {
        id
        name
      }
    }
  `);
  console.log('fetchUsers result', result);
  return result.data.readUser;
};

export const createUser = async ({name}) => {
  console.log('name: ', name);
  const result = await mutation(
    gql`
      mutation ($name: String!) {
        createUser(input: {name: $name}) {
          id
        }
      }
    `,
    {
      name,
    },
  );
  const itemId = result.data?.createUser?.[0]?.id;
  console.log('createUser result', result, itemId);
  return !!itemId;
};
