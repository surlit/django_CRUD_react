#!/bin/bash

# Nombre del entorno virtual
ENV_DIR="env"

# Verificar si el entorno virtual ya existe
if [ -d "$ENV_DIR" ]; then
    echo "El entorno virtual ya existe. Activándolo..."
else
    # Crear entorno virtual
    echo "Creando un nuevo entorno virtual..."
    python3 -m venv "$ENV_DIR"
fi

# Levantar entorno virtual
source "$ENV_DIR/bin/activate"

# Instalar Django si no está instalado
if ! python -c "import django" &> /dev/null; then
    echo "Instalando Django..."
    pip install -r requirements.txt
else
    echo "Django ya está instalado."
fi

# Realizar migraciones
echo "Realizando migraciones..."
python manage.py makemigrations
python manage.py migrate

# Levantar Django
echo "Levantando el servidor de Django en el puerto 8001..."
python manage.py runserver 8001
