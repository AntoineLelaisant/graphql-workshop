FROM traefik:v2.5.2 as base

##################################

FROM base as dev

COPY dynamic_conf.yaml /etc/traefik/dynamic_conf.yaml
COPY traefik.yaml /etc/traefik/traefik.yaml

