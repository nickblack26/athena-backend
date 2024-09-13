import { SeedPg } from "@snaplet/seed/adapter-pg";
import { defineConfig } from "@snaplet/seed/config";
import { Client } from "pg";

export default defineConfig({
  adapter: async () => {
    const client = new Client('postgresql://postgres.qqfkxhqzsbqgydssvfss:m3rNju9xRexrDL5s@aws-0-us-west-1.pooler.supabase.com:6543/postgres');
    await client.connect();
    return new SeedPg(client);
  },
  select: ['!*', 'public.*', 'reporting.*']
});