import axios from "axios";
const apikey = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;
const baseId = process.env.NEXT_PUBLIC_BASE_ID;

export const api = axios.create({
  baseURL: `https://api.airtable.com/v0/${baseId}/`,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});
