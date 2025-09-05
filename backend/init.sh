#!/bin/bash
#Crear entorno virtual
python3 -m venv env

#levantar entorno virtual 
source env/bin/activate

#instalamos django
pip install -r requirements.txt

#realizar migraciones
python3 manage.py makemigrations
python3 manage.py migrate

#levantar django
python3 manage.py runserver 8001