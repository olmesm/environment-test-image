# Environment Test Image

Useful for testing if environment variables are being correctly passed through to the running container.

## Requires

- [docker](https://www.docker.com/)

## Running

```sh
# Build the image and tag as "test-image"
docker build -t test-image .

# Run the image
docker run --rm -it -p 3000:3000 test-image:latest

# Run the image with TEST_MESSAGE set
docker run --rm -it -p 3000:3000 -e TEST_MESSAGE="Working" test-image:latest
```
