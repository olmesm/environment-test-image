const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");
const client = new SecretManagerServiceClient();
const { GCP_TEST_SECRET_MESSAGE, TEST_MESSAGE } = process.env;

module.exports = async () => {
  try {
    const [accessResponse] = await client.accessSecretVersion({
      name: GCP_TEST_SECRET_MESSAGE,
    });

    return {
      TEST_MESSAGE: TEST_MESSAGE || "TEST_MESSAGE env var is not defined",
      GCP_TEST_SECRET_MESSAGE: accessResponse.payload.data.toString("utf8"),
    };
  } catch (error) {
    return {
      TEST_MESSAGE: TEST_MESSAGE || "TEST_MESSAGE env var is not defined",
      GCP_TEST_SECRET_MESSAGE: GCP_TEST_SECRET_MESSAGE,
      error,
    };
  }
};
