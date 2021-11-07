FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /api/app
COPY requirements.txt requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
COPY . /api/app
EXPOSE 8000