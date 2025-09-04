#Crear entorno virtual
python3 -m venv env

#levantar entorno virtual 
source env/bin/activate

#instalamos django
pip install django

#levantar django
python3 manage.py runserver