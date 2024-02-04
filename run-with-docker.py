from os import system


# Define a list of docker commands 

commands = [
    'docker build -t Django-React-App .',
    'docker run -p 8000:8000 Django-React-App',
]


# Running the all docker command one-by-one

for command in commands:
    system(command)