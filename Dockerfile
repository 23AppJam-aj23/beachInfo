FROM python:3.10

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

EXPOSE 20003

CMD ["python", "/app/main.py"]