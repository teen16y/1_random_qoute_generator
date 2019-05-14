# 1_random_qoute_generator
1st project by techdgree in treehouse

## what I learneed from this project 

### 1.재귀함수 
재귀함수를 이용해서 렌덤함수가 이전과 같은 quote를 select 했을때, 이전과 다른 quote가 나올때 까지 함수를 반복하는것을 구현하였다. 이때 현재 함수를 다시불러줄때는,
그냥 함수만 콜하는게 아니라 return 함수 를 해줘야 한다. 
(do...while 함수로 조금더 간단하게 구현할 수도 있을듯) 

### 2.getElementsByClassName 사용법
DomElement를 선택할때 getElemeentById('test') 이런식으로 하면되지만 class의 경우 getElementsByClassName('test')[0] 이런식으로 인덱스를 꼭 붙여줘야한다. 
이유는 해당 함수는 하나의 리턴값이 아니라 collection(배열)로 반환하기 때문이다.
