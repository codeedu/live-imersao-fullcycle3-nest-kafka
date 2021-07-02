
# Apache Kafka - Open Source - 2011 - Apache Foundation

# Processar stream - dados/eventos

# PUB/SUB

# producer - sistema ---- topic (esteria)

# consumer - sistema

# Particao

TOPICO  - pagamento
producer         # 0 -----cancelamento --- pagamento ---------------   consumer1
                 # 1 ---------  ----------   consumer2
                 # 2 ---------------------------   consumer3
                 # 3 ---------------------------   consumer4

#offset ->  0 1 2 3 4 5

#key

#producer - evento - pagamento - key: compra
#producer - evento - cancelamento - key: compra


latest ---- offset

earliest

maquinas kafka

replication-factor = 3
topico pagamento   3 maquina


consumer group - group1

consumer1
consumer2
consumer3
