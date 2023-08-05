const beachInfo = () => {
    const positions = [
        {
            title: '을왕리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.44713888888889 ,  126.37209444444444 ),
            num: 1 
        },
        {
            title: '왕산 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.45615277777778 ,  126.37121666666665 ),
            num: 2 
        },
        {
            title: '하나개 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.38684722222222 ,  126.41125277777779 ),
            num: 3 
        },
        {
            title: '사계해안', 
            latlng: new kakao.maps.LatLng( 33.22858 ,  126.326645 ),
            num: 4 
        },
        {
            title: '하모해변', 
            latlng: new kakao.maps.LatLng( 33.228752 ,  126.272202 ),
            num: 5 
        },
        {
            title: '민머루 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.65143055555556 ,  126.33353055555555 ),
            num: 6 
        },
        {
            title: '장경리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.277875 ,  126.45091388888889 ),
            num: 7 
        },
        {
            title: '옹암 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.53479166666666 ,  126.35617222222221 ),
            num: 8 
        },
        {
            title: '논짓물', 
            latlng: new kakao.maps.LatLng( 33.228378 ,  126.381081 ),
            num: 9 
        },
        {
            title: '수기 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.543575 ,  126.43191666666667 ),
            num: 10 
        },
        {
            title: '동막 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.59238333333334 ,  126.45818611111112 ),
            num: 11 
        },
        {
            title: '서포리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.219430555555554 ,  126.11484444444444 ),
            num: 12 
        },
        {
            title: '십리포 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.281394444444445 ,  126.48355555555555 ),
            num: 13 
        },
        {
            title: '굴업 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.192161111111105 ,  125.98377777777777 ),
            num: 14 
        },
        {
            title: '떼뿌루 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.21242222222222 ,  126.174975 ),
            num: 15 
        },
        {
            title: '밧지름 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.21476666666667 ,  126.14048611111112 ),
            num: 16 
        },
        {
            title: '한담해변', 
            latlng: new kakao.maps.LatLng( 33.456364 ,  126.327759 ),
            num: 17 
        },
        {
            title: '알작지', 
            latlng: new kakao.maps.LatLng( 33.501507 ,  126.437309 ),
            num: 18 
        },
        {
            title: '한들 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.528733333333335 ,  126.34704722222222 ),
            num: 19 
        },
        {
            title: '큰풀안 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.16922222222222 ,  126.26336111111111 ),
            num: 20 
        },
        {
            title: '장골 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.24935833333333 ,  126.31468333333333 ),
            num: 21 
        },
        {
            title: '벌안 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.18151666666667 ,  126.22226666666667 ),
            num: 22 
        },
        {
            title: '지두리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.82120833333334 ,  124.67928611111111 ),
            num: 23 
        },
        {
            title: '검멀레해변', 
            latlng: new kakao.maps.LatLng( 33.497463 ,  126.983902 ),
            num: 24 
        },
        {
            title: '세화해변', 
            latlng: new kakao.maps.LatLng( 33.49852 ,  126.874588 ),
            num: 25 
        },
        {
            title: '모래울 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.81381666666666 ,  124.6846888888889 ),
            num: 26 
        },
        {
            title: '평대해변', 
            latlng: new kakao.maps.LatLng( 33.544586 ,  126.820488 ),
            num: 27 
        },
        {
            title: '제주신흥해수욕장', 
            latlng: new kakao.maps.LatLng( 33.545845 ,  126.656403 ),
            num: 28 
        },
        {
            title: '월정리해변(월정리해수욕장)', 
            latlng: new kakao.maps.LatLng( 33.544586 ,  126.820488 ),
            num: 29 
        },
        {
            title: '큰말 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.25273333333333 ,  126.30634166666667 ),
            num: 30 
        },
        {
            title: '진촌 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.55046944444444 ,  126.33486666666666 ),
            num: 31 
        },
        {
            title: '보길도 뾰쪽산과 보옥리 공룡알해변', 
            latlng: new kakao.maps.LatLng( 34.140064 ,  126.496719 ),
            num: 32 
        },
        {
            title: '진산리해수욕장', 
            latlng: new kakao.maps.LatLng( 34.139072 ,  126.662285 ),
            num: 33 
        },
        {
            title: '작은풀안 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.170575 ,  126.25745833333333 ),
            num: 34 
        },
        {
            title: '이일레 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.16471111111111 ,  126.30210277777778 ),
            num: 35 
        },
        {
            title: '문갑 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.17881944444444 ,  126.10709444444444 ),
            num: 36 
        },
        {
            title: '계남 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.17 ,  126.27 ),
            num: 37 
        },
        {
            title: '미라리해수욕장', 
            latlng: new kakao.maps.LatLng( 34.139072 ,  126.662285 ),
            num: 38 
        },
        {
            title: '제부도 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.16549444444444 ,  126.61729444444444 ),
            num: 39 
        },
        {
            title: '궁평리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.12104444444444 ,  126.68505277777778 ),
            num: 40 
        },
        {
            title: '대천 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.31 ,  126.51 ),
            num: 41 
        },
        {
            title: '벌천포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.97 ,  126.34 ),
            num: 42 
        },
        {
            title: '춘장대 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.16 ,  126.52 ),
            num: 43 
        },
        {
            title: '꽃지 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.49 ,  126.33 ),
            num: 44 
        },
        {
            title: '구름포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.84 ,  126.15 ),
            num: 45 
        },
        {
            title: '마검포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.61 ,  126.29 ),
            num: 46 
        },
        {
            title: '지리해수욕장', 
            latlng: new kakao.maps.LatLng( 34.182987 ,  126.883636 ),
            num: 47 
        },
        {
            title: '용두 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.26 ,  126.54 ),
            num: 48 
        },
        {
            title: '독산(홀뫼) 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.22 ,  126.53 ),
            num: 49 
        },
        {
            title: '장안 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.2 ,  126.53 ),
            num: 50 
        },
        {
            title: '무창포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.24 ,  126.53 ),
            num: 51 
        },
        {
            title: '밧개 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.53 ,  126.33 ),
            num: 52 
        },
        {
            title: '두여 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.540841666666665 ,  126.33 ),
            num: 53 
        },
        {
            title: '안면 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.54789722222222 ,  126.32904444444443 ),
            num: 54 
        },
        {
            title: '삼봉 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.571288888888894 ,  126.31316666666666 ),
            num: 55 
        },
        {
            title: '백사장 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.57886944444445 ,  126.3140611111111 ),
            num: 56 
        },
        {
            title: '방포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.50844166666667 ,  126.33416666666666 ),
            num: 57 
        },
        {
            title: '기지포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.56061388888889 ,  126.32421944444444 ),
            num: 58 
        },
        {
            title: '샛별 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.44716944444444 ,  126.33 ),
            num: 59 
        },
        {
            title: '정도리해변', 
            latlng: new kakao.maps.LatLng( 34.321442 ,  126.719452 ),
            num: 60 
        },
        {
            title: '장삼포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.42236111111111 ,  126.3603 ),
            num: 61 
        },
        {
            title: '바람아래 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.412844444444445 ,  126.37929722222222 ),
            num: 62 
        },
        {
            title: '몽산포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.66959166666666 ,  126.28751111111112 ),
            num: 63 
        },
        {
            title: '달산포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.65375833333333 ,  126.296575 ),
            num: 64 
        },
        {
            title: '청포대 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.63936388888889 ,  126.29835555555556 ),
            num: 65 
        },
        {
            title: '갈음이 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.7 ,  126.15 ),
            num: 66 
        },
        {
            title: '연포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.69359166666666 ,  126.21065 ),
            num: 67 
        },
        {
            title: '천리포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.80327222222222 ,  126.14934722222223 ),
            num: 68 
        },
        {
            title: '의항 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.82783333333334 ,  126.15973611111112 ),
            num: 69 
        },
        {
            title: '만리포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.78802222222222 ,  126.14316944444445 ),
            num: 70 
        },
        {
            title: '어은돌 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.7506 ,  126.12956944444444 ),
            num: 71 
        },
        {
            title: '파도리 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.73815833333333 ,  126.1313111111111 ),
            num: 72 
        },
        {
            title: '학암포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.90316388888889 ,  126.20438611111112 ),
            num: 73 
        },
        {
            title: '구례포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.8875 ,  126.19701666666667 ),
            num: 74 
        },
        {
            title: '신두리 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.838705555555556 ,  126.19 ),
            num: 75 
        },
        {
            title: '오천몽돌해변', 
            latlng: new kakao.maps.LatLng( 34.407879 ,  127.219162 ),
            num: 76 
        },
        {
            title: '꾸지나무골 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.93515555555555 ,  126.29205555555555 ),
            num: 77 
        },
        {
            title: '난지도 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.04736666666666 ,  126.42326944444444 ),
            num: 78 
        },
        {
            title: '원산도 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.36 ,  126.43 ),
            num: 79 
        },
        {
            title: '송평해변', 
            latlng: new kakao.maps.LatLng( 34.414524 ,  126.443359 ),
            num: 80 
        },
        {
            title: '남성리해수욕장', 
            latlng: new kakao.maps.LatLng( 34.542812 ,  127.38826 ),
            num: 81 
        },
        {
            title: '오봉산 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.37 ,  126.4 ),
            num: 82 
        },
        {
            title: '명장섬 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.4 ,  126.34 ),
            num: 83 
        },
        {
            title: '덕동몽돌해수욕장', 
            latlng: new kakao.maps.LatLng( 34.574329 ,  128.16687 ),
            num: 84 
        },
        {
            title: '유동해변', 
            latlng: new kakao.maps.LatLng( 34.618801 ,  128.223953 ),
            num: 85 
        },
        {
            title: '당산 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.27 ,  126.27 ),
            num: 86 
        },
        {
            title: '통개 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.72806944444444 ,  126.14265833333334 ),
            num: 87 
        },
        {
            title: '띠밭넘어해변', 
            latlng: new kakao.maps.LatLng( 34.598328 ,  125.833275 ),
            num: 88 
        },
        {
            title: '거멀너머 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.35 ,  126.35 ),
            num: 89 
        },
        {
            title: '진너머 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.35 ,  126.35 ),
            num: 90 
        },
        {
            title: '선유도 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.816855555555556 ,  126.41141666666667 ),
            num: 91 
        },
        {
            num: 92 
        },
        {
            title: '모항 갯벌 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.582155 ,  126.507543 ),
            num: 93 
        },
        {
            title: '흰작살해변', 
            latlng: new kakao.maps.LatLng( 34.617516 ,  128.279526 ),
            num: 94 
        },
        {
            title: '격포 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.63001666666667 ,  126.46926666666667 ),
            num: 95 
        },
        {
            title: '고사포 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.66284722222222 ,  126.50863333333334 ),
            num: 96 
        },
        {
            title: '변산 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.68028611111111 ,  126.52960277777778 ),
            num: 97 
        },
        {
            title: '위도 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.61 ,  126.28 ),
            num: 98 
        },
        {
            title: '외달도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.781933333333335 ,  126.29689166666667 ),
            num: 99 
        },
        {
            title: '천하몽돌해수욕장', 
            latlng: new kakao.maps.LatLng( 34.715115 ,  128.00444 ),
            num: 100 
        },
        {
            title: '안도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.490681 ,  127.812671 ),
            num: 101 
        },
        {
            title: '장등 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.65 ,  127.61 ),
            num: 102 
        },
        {
            title: '모사금 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.8 ,  127.76 ),
            num: 103 
        },
        {
            title: '만성리검은모래 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.777383 ,  127.744882 ),
            num: 104 
        },
        {
            title: '신덕 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.82 ,  127.77 ),
            num: 105 
        },
        {
            title: '방죽포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.63 ,  127.79 ),
            num: 106 
        },
        {
            title: '사도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.59 ,  127.56 ),
            num: 107 
        },
        {
            title: '거문도(유림) 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.01 ,  127.289863888889 ),
            num: 108 
        },
        {
            title: '남해 가천 해변과 암수바위', 
            latlng: new kakao.maps.LatLng( 34.717342 ,  127.89312 ),
            num: 109 
        },
        {
            title: '연대도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.752064 ,  128.395645 ),
            num: 110 
        },
        {
            title: '선구몽돌해변', 
            latlng: new kakao.maps.LatLng( 34.718407 ,  127.837463 ),
            num: 111 
        },
        {
            title: '용동 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.63 ,  127.18 ),
            num: 112 
        },
        {
            title: '익금 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.42932222222222 ,  127.14468333333333 ),
            num: 113 
        },
        {
            title: '연소 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.45 ,  127.12 ),
            num: 114 
        },
        {
            title: '발포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.49176666666667 ,  127.35669999999999 ),
            num: 115 
        },
        {
            title: '염포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.43 ,  127.49 ),
            num: 116 
        },
        {
            title: '나로우주 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.470619444444445 ,  127.46812222222222 ),
            num: 117 
        },
        {
            title: '풍류 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.66 ,  127.23 ),
            num: 118 
        },
        {
            title: '대전 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.71276666666667 ,  127.27055277777778 ),
            num: 119 
        },
        {
            title: '남열해돋이 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.57895277777778 ,  127.48668611111111 ),
            num: 120 
        },
        {
            title: '덕흥 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.52704722222222 ,  127.45916111111111 ),
            num: 121 
        },
        {
            title: '율포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.66974444444444 ,  127.08851944444444 ),
            num: 122 
        },
        {
            title: '수문 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.63515833333333 ,  127.03490833333333 ),
            num: 123 
        },
        {
            title: '항도몽돌해수욕장과 항도방파제', 
            latlng: new kakao.maps.LatLng( 34.759705 ,  128.061523 ),
            num: 124 
        },
        {
            title: '사구미 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.3205555555556 ,  126.579191666667 ),
            num: 125 
        },
        {
            title: '하트해변(하누넘해수욕장)', 
            latlng: new kakao.maps.LatLng( 34.735676 ,  125.888618 ),
            num: 126 
        },
        {
            title: '송호땅끝 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.314302777777776 ,  126.51900833333333 ),
            num: 127 
        },
        {
            title: '홀통 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.06064166666666 ,  126.33632222222222 ),
            num: 128 
        },
        {
            title: '톱머리 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.968044444444445 ,  126.38693055555557 ),
            num: 129 
        },
        {
            title: '구미동해변 (구미동해수욕장)', 
            latlng: new kakao.maps.LatLng( 34.809925 ,  127.840019 ),
            num: 130 
        },
        {
            title: '돌머리 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.08653888888889 ,  126.43910277777778 ),
            num: 131 
        },
        {
            title: '모상개해수욕장', 
            latlng: new kakao.maps.LatLng( 34.851227 ,  128.064392 ),
            num: 132 
        },
        {
            title: '가마미 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.398558333333334 ,  126.40825833333334 ),
            num: 133 
        },
        {
            title: '송이도 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.27435555555555 ,  126.152725 ),
            num: 134 
        },
        {
            title: '금일해당화 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.331052 ,  127.057436 ),
            num: 135 
        },
        {
            title: '신지명사십리 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.32637777777778 ,  126.8086 ),
            num: 136 
        },
        {
            title: '가사동백숲 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.370335 ,  126.928274 ),
            num: 137 
        },
        {
            title: '동고 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.32940277777778 ,  126.88034444444443 ),
            num: 138 
        },
        {
            title: '지리청송 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.19829444444444 ,  126.86186388888888 ),
            num: 139 
        },
        {
            title: '통리솔밭 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.15792777777778 ,  126.57914166666666 ),
            num: 140 
        },
        {
            title: '중리 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.16 ,  126.59 ),
            num: 141 
        },
        {
            title: '예송갯돌 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.14221944444444 ,  126.56408888888889 ),
            num: 142 
        },
        {
            title: '금곡 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.320036111111115 ,  126.95940277777778 ),
            num: 143 
        },
        {
            title: '가계 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.435027777777776 ,  126.35513333333333 ),
            num: 144 
        },
        {
            title: '금갑 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.395069444444445 ,  126.27755555555555 ),
            num: 145 
        },
        {
            title: '죽림해수욕장', 
            latlng: new kakao.maps.LatLng( 34.839314 ,  128.566238 ),
            num: 146 
        },
        {
            title: '관매도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.246719444444444 ,  126.05194999999999 ),
            num: 147 
        },
        {
            title: '신전 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.283319444444444 ,  126.073225 ),
            num: 148 
        },
        {
            title: '분계 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.88 ,  126.05 ),
            num: 149 
        },
        {
            title: '우전 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.971247222222225 ,  126.13660833333334 ),
            num: 150 
        },
        {
            title: '대광 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.10315555555556 ,  126.06903333333332 ),
            num: 151 
        },
        {
            title: '백길 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.85787777777778 ,  126.03281666666666 ),
            num: 152 
        },
        {
            num: 153 
        },
        {
            title: '하트 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.74975277777778 ,  125.894625 ),
            num: 154 
        },
        {
            title: '시목 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.672244444444445 ,  125.9545638888889 ),
            num: 155 
        },
        {
            title: '돈목 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.609055 ,  125.827436 ),
            num: 156 
        },
        {
            title: '금장 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.43546944444444 ,  127.16492222222223 ),
            num: 157 
        },
        {
            title: '무술목 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.68375555555555 ,  127.77630277777777 ),
            num: 158 
        },
        {
            title: '화포해변', 
            latlng: new kakao.maps.LatLng( 34.861435 ,  127.506607 ),
            num: 159 
        },
        {
            title: '둔장해변', 
            latlng: new kakao.maps.LatLng( 34.918835 ,  126.055847 ),
            num: 160 
        },
        {
            title: '배알도해수욕장', 
            latlng: new kakao.maps.LatLng( 34.949291 ,  127.732155 ),
            num: 161 
        },
        {
            title: '두모몽돌해변', 
            latlng: new kakao.maps.LatLng( 34.973606 ,  128.683334 ),
            num: 162 
        },
        {
            title: '조금나루해수욕장', 
            latlng: new kakao.maps.LatLng( 35.009872 ,  126.335541 ),
            num: 163 
        },
        {
            title: '몰운대(부산 국가지질공원)', 
            latlng: new kakao.maps.LatLng( 35.057079 ,  128.966751 ),
            num: 164 
        },
        {
            title: '감지해변', 
            latlng: new kakao.maps.LatLng( 35.053623 ,  129.078598 ),
            num: 165 
        },
        {
            title: '안악해수욕장', 
            latlng: new kakao.maps.LatLng( 35.147102 ,  126.392288 ),
            num: 166 
        },
        {
            title: '손죽 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.29 ,  127.36 ),
            num: 167 
        },
        {
            title: '신흥 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.18368888888889 ,  126.90784166666667 ),
            num: 168 
        },
        {
            title: '나사해변(나사리해수욕장)', 
            latlng: new kakao.maps.LatLng( 35.366867 ,  129.318481 ),
            num: 169 
        },
        {
            title: '모래미 해변', 
            latlng: new kakao.maps.LatLng( 35.376293 ,  126.393661 ),
            num: 170 
        },
        {
            title: '솔개해수욕장', 
            latlng: new kakao.maps.LatLng( 35.364952 ,  129.374649 ),
            num: 171 
        },
        {
            title: '강문 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.796952777777776 ,  128.91798333333332 ),
            num: 172 
        },
        {
            num: 173 
        },
        {
            title: '안목 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.773225 ,  128.94735 ),
            num: 174 
        },
        {
            title: '남항진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.76456944444445 ,  128.95475555555555 ),
            num: 175 
        },
        {
            title: '경포 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.80433333333333 ,  128.90983055555557 ),
            num: 176 
        },
        {
            title: '사근진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.81154166666666 ,  128.90028055555555 ),
            num: 177 
        },
        {
            title: '순긋 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.817797222222225 ,  128.89318333333333 ),
            num: 178 
        },
        {
            title: '주문진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.911230555555555 ,  128.81963888888887 ),
            num: 179 
        },
        {
            title: '주전몽돌해변', 
            latlng: new kakao.maps.LatLng( 35.592129 ,  129.442917 ),
            num: 180 
        },
        {
            title: '안인 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.73485277777778 ,  128.99068055555554 ),
            num: 181 
        },
        {
            title: '정동진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.69155017 ,  129.0352866 ),
            num: 182 
        },
        {
            title: '등명 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.703975 ,  129.01841666666667 ),
            num: 183 
        },
        {
            title: '도직 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.60299292 ,  129.0769156 ),
            num: 184 
        },
        {
            num: 185 
        },
        {
            title: '금진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.62734106 ,  129.0497078 ),
            num: 186 
        },
        {
            title: '하평해변', 
            latlng: new kakao.maps.LatLng( 37.82814 ,  128.8802 ),
            num: 187 
        },
        {
            title: '사천 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.85 ,  128.87 ),
            num: 188 
        },
        {
            title: '영진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.86900183 ,  128.8457533 ),
            num: 189 
        },
        {
            title: '연곡 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.85925583 ,  128.8537136 ),
            num: 190 
        },
        {
            title: '상록해수욕장', 
            latlng: new kakao.maps.LatLng( 35.605122 ,  126.507919 ),
            num: 191 
        },
        {
            title: '강동몽돌해변', 
            latlng: new kakao.maps.LatLng( 35.637974 ,  129.445343 ),
            num: 192 
        },
        {
            title: '신명·정자해변', 
            latlng: new kakao.maps.LatLng( 35.637974 ,  129.445343 ),
            num: 193 
        },
        {
            title: '나아해변', 
            latlng: new kakao.maps.LatLng( 35.729679 ,  129.450211 ),
            num: 194 
        },
        {
            title: '추암 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.47668055555556 ,  129.160425 ),
            num: 195 
        },
        {
            title: '어달 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.56803611111111 ,  129.11870833333333 ),
            num: 196 
        },
        {
            num: 197 
        },
        {
            title: '망상 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.59423888888889 ,  129.09089166666666 ),
            num: 198 
        },
        {
            title: '노봉 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.58734166666667 ,  129.1021861111111 ),
            num: 199 
        },
        {
            title: '등대 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.217022222222226 ,  128.59544722222222 ),
            num: 200 
        },
        {
            title: '속초 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.18828055555555 ,  128.6055888888889 ),
            num: 201 
        },
        {
            title: '외옹치 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.1834 ,  128.60915555555556 ),
            num: 202 
        },
        {
            title: '삼척 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.46904444444445 ,  129.16896388888887 ),
            num: 203 
        },
        {
            title: '작은후진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.46403055555556 ,  129.17588333333333 ),
            num: 204 
        },
        {
            title: '증산 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.47461666666667 ,  129.16206666666668 ),
            num: 205 
        },
        {
            title: '오분해변', 
            latlng: new kakao.maps.LatLng( 37.42624166666666 ,  129.1922 ),
            num: 206 
        },
        {
            title: '옥돌해수욕장', 
            latlng: new kakao.maps.LatLng( 35.789223 ,  126.396164 ),
            num: 207 
        },
        {
            title: '몽돌해수욕장/몽돌해변', 
            latlng: new kakao.maps.LatLng( 35.835133 ,  126.396446 ),
            num: 208 
        },
        {
            title: '신창 간이 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.91116 ,  129.516632 ),
            num: 209 
        },
        {
            title: '흥환간이해수욕장', 
            latlng: new kakao.maps.LatLng( 36.00293 ,  129.521606 ),
            num: 210 
        },
        {
            title: '송도해변(포항)', 
            latlng: new kakao.maps.LatLng( 36.054741 ,  129.35379 ),
            num: 211 
        },
        {
            title: '상맹방 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.40367777777777 ,  129.21134166666667 ),
            num: 212 
        },
        {
            title: '하맹방 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.3945 ,  129.22600277777778 ),
            num: 213 
        },
        {
            title: '맹방 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.389986111111114 ,  129.23309166666667 ),
            num: 214 
        },
        {
            title: '덕산 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.386224999999996 ,  129.24146666666667 ),
            num: 215 
        },
        {
            title: '부남해변', 
            latlng: new kakao.maps.LatLng( 37.36187777777778 ,  129.2515611111111 ),
            num: 216 
        },
        {
            title: '궁촌 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.32440833333334 ,  129.26862500000001 ),
            num: 217 
        },
        {
            num: 218 
        },
        {
            title: '문암 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.309733333333334 ,  129.28914444444445 ),
            num: 219 
        },
        {
            title: '용화 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.29007222222222 ,  129.3048611111111 ),
            num: 220 
        },
        {
            title: '장호 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.28585555555556 ,  129.31454722222225 ),
            num: 221 
        },
        {
            title: '거진1리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.4478949 ,  128.4653985 ),
            num: 222 
        },
        {
            title: '거진11리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.44203888888889 ,  128.45516666666666 ),
            num: 223 
        },
        {
            title: '대진1리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.50411751 ,  128.4249022 ),
            num: 224 
        },
        {
            title: '대진5리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.49626185 ,  128.4294011 ),
            num: 225 
        },
        {
            title: '화진포 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.47803 ,  128.43894 ),
            num: 226 
        },
        {
            title: '초도리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.49439 ,  128.42829 ),
            num: 227 
        },
        {
            title: '반암리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.42268333333333 ,  128.46387777777775 ),
            num: 228 
        },
        {
            title: '마차진 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.510930555555554 ,  128.41989444444442 ),
            num: 229 
        },
        {
            title: '명파 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.543502777777775 ,  128.40559722222224 ),
            num: 230 
        },
        {
            title: '송지호 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.32993333333334 ,  128.52788611111112 ),
            num: 231 
        },
        {
            title: '봉수대 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.32090555555556 ,  128.52831944444446 ),
            num: 232 
        },
        {
            title: '가진리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.37276388888889 ,  128.50975277777778 ),
            num: 233 
        },
        {
            title: '공현1리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.35858298 ,  128.5085337 ),
            num: 234 
        },
        {
            title: '공현2리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.35047742 ,  128.5112024 ),
            num: 235 
        },
        {
            title: '삼포 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.3153605 ,  128.5350551 ),
            num: 236 
        },
        {
            title: '삼포2리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.31854047 ,  128.5316005 ),
            num: 237 
        },
        {
            title: '백도 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.30125555555555 ,  128.54631944444444 ),
            num: 238 
        },
        {
            title: '문암2리해변', 
            latlng: new kakao.maps.LatLng( 38.29676 ,  128.54939 ),
            num: 239 
        },
        {
            title: '자작도 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.29735916 ,  128.5476381 ),
            num: 240 
        },
        {
            title: '천진 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.257641666666665 ,  128.56039166666667 ),
            num: 241 
        },
        {
            title: '청간 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.268188888888886 ,  128.55663611111112 ),
            num: 242 
        },
        {
            title: '아야진 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.27593888888889 ,  128.5534138888889 ),
            num: 243 
        },
        {
            title: '교암리 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.29091388888889 ,  128.54706388888889 ),
            num: 244 
        },
        {
            title: '봉포 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.25403611111111 ,  128.56379166666667 ),
            num: 245 
        },
        {
            num: 246 
        },
        {
            title: '오산 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.09115833333333 ,  128.66411944444445 ),
            num: 247 
        },
        {
            title: '잔교리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.992986111111115 ,  128.74373333333332 ),
            num: 248 
        },
        {
            title: '하조대 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.02301666666666 ,  128.7262611111111 ),
            num: 249 
        },
        {
            title: '죽도 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.97443888888889 ,  128.76007222222222 ),
            num: 250 
        },
        {
            title: '갯마을 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.94982777777778 ,  128.77851944444447 ),
            num: 251 
        },
        {
            title: '인구 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.968944444444446 ,  128.76390833333335 ),
            num: 252 
        },
        {
            title: '동산 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.98164166666667 ,  128.75884722222222 ),
            num: 253 
        },
        {
            title: '동산포구 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.981683333333336 ,  128.75847777777778 ),
            num: 254 
        },
        {
            title: '광진리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.96477777777778 ,  128.7646638888889 ),
            num: 255 
        },
        {
            title: '원포리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.93042222222222 ,  128.79236111111112 ),
            num: 256 
        },
        {
            title: '지경 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.922675 ,  128.80333611111112 ),
            num: 257 
        },
        {
            title: '남애1리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.95490277777778 ,  128.77271666666667 ),
            num: 258 
        },
        {
            title: '남애3리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.94564999999999 ,  128.78464444444444 ),
            num: 259 
        },
        {
            title: '물치 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.1526 ,  128.60817 ),
            num: 260 
        },
        {
            title: '정암 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.138355555555556 ,  128.61647222222223 ),
            num: 261 
        },
        {
            title: '낙산 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.11677 ,  128.63401 ),
            num: 262 
        },
        {
            title: '설악 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.130091666666665 ,  128.62362222222222 ),
            num: 263 
        },
        {
            title: '사천진 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.842172222222224 ,  128.87438055555558 ),
            num: 264 
        },
        {
            title: '켄싱턴리조트 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.24288333333333 ,  128.57345555555554 ),
            num: 265 
        },
        {
            title: '송지호오토캠핑 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.34252 ,  128.51573 ),
            num: 266 
        },
        {
            title: '기사문 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.00551388888889 ,  128.73170277777777 ),
            num: 267 
        },
        {
            title: '송도 해수욕장(부산)', 
            latlng: new kakao.maps.LatLng( 35.08 ,  129.02 ),
            num: 268 
        },
        {
            title: '구룡포 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.99679444444445 ,  129.56625833333334 ),
            num: 269 
        },
        {
            title: '도구 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.992666666666665 ,  129.44292777777778 ),
            num: 270 
        },
        {
            title: '영일대 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.05403611111111 ,  129.37750833333334 ),
            num: 271 
        },
        {
            title: '칠포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.132327777777775 ,  129.40029166666667 ),
            num: 272 
        },
        {
            title: '월포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.20332777777778 ,  129.3714138888889 ),
            num: 273 
        },
        {
            title: '화진 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.25324722222222 ,  129.3734138888889 ),
            num: 274 
        },
        {
            title: '갈목해변', 
            latlng: new kakao.maps.LatLng( 36.063602 ,  126.625191 ),
            num: 275 
        },
        {
            title: '용한1리해수욕장', 
            latlng: new kakao.maps.LatLng( 36.098705 ,  129.412994 ),
            num: 276 
        },
        {
            title: '전촌솔밭해변', 
            latlng: new kakao.maps.LatLng( 35.787052777777774 ,  129.49152222222222 ),
            num: 277 
        },
        {
            title: '나정고운모래해변', 
            latlng: new kakao.maps.LatLng( 35.78390833333333 ,  129.49181944444445 ),
            num: 278 
        },
        {
            title: '오류고아라해변', 
            latlng: new kakao.maps.LatLng( 35.82243611111112 ,  129.50959166666667 ),
            num: 279 
        },
        {
            title: '봉길대왕암해변', 
            latlng: new kakao.maps.LatLng( 35.73929166666667 ,  129.48446388888888 ),
            num: 280 
        },
        {
            title: '관성솔밭해변', 
            latlng: new kakao.maps.LatLng( 35.660199999999996 ,  129.45230555555554 ),
            num: 281 
        },
        {
            title: '남호 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.327088888888895 ,  129.38137777777777 ),
            num: 282 
        },
        {
            title: '오보 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.440730555555554 ,  129.43287777777778 ),
            num: 283 
        },
        {
            title: '장사 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.283202777777774 ,  129.37601111111113 ),
            num: 284 
        },
        {
            title: '경정 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.48093333333333 ,  129.43296944444444 ),
            num: 285 
        },
        {
            num: 286 
        },
        {
            title: '하저리 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.3898 ,  129.4095027777778 ),
            num: 287 
        },
        {
            title: '고래불 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.59880833333334 ,  129.41274444444446 ),
            num: 288 
        },
        {
            title: '나곡 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.126225 ,  129.37151111111112 ),
            num: 289 
        },
        {
            title: '망양정 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.96717777777778 ,  129.41404722222222 ),
            num: 290 
        },
        {
            title: '기성망양 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.84305833333334 ,  129.43466666666666 ),
            num: 291 
        },
        {
            title: '구산 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.752225 ,  129.46807777777778 ),
            num: 292 
        },
        {
            title: '봉평 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.044105555555554 ,  129.41327777777778 ),
            num: 293 
        },
        {
            title: '후정 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.07212777777778 ,  129.41365277777777 ),
            num: 294 
        },
        {
            title: '비인해수욕장', 
            latlng: new kakao.maps.LatLng( 36.10989 ,  126.568764 ),
            num: 295 
        },
        {
            title: '띠섬목해변', 
            latlng: new kakao.maps.LatLng( 36.155842 ,  126.569168 ),
            num: 296 
        },
        {
            title: '오도1리해수욕장', 
            latlng: new kakao.maps.LatLng( 36.144611 ,  129.415421 ),
            num: 297 
        },
        {
            title: '조사리간이해수욕장', 
            latlng: new kakao.maps.LatLng( 36.238396 ,  129.363342 ),
            num: 298 
        },
        {
            title: '오포해수욕장', 
            latlng: new kakao.maps.LatLng( 36.376194 ,  129.370529 ),
            num: 299 
        },
        {
            title: '사창해수욕장', 
            latlng: new kakao.maps.LatLng( 36.386517 ,  126.399841 ),
            num: 300 
        },
        {
            title: '운여해변', 
            latlng: new kakao.maps.LatLng( 36.432716 ,  126.342964 ),
            num: 301 
        },
        {
            title: '두에기해변', 
            latlng: new kakao.maps.LatLng( 36.524704 ,  126.34346 ),
            num: 302 
        },
        {
            title: '덕천해수욕장', 
            latlng: new kakao.maps.LatLng( 36.558044 ,  129.437393 ),
            num: 303 
        },
        {
            title: '해운대 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.158852777777774 ,  129.16168611111112 ),
            num: 304 
        },
        {
            num: 305 
        },
        {
            title: '광안리 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.153555555555556 ,  129.11940555555557 ),
            num: 306 
        },
        {
            title: '임랑 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.318538888888895 ,  129.26437777777778 ),
            num: 307 
        },
        {
            title: '다대포 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.046077777777775 ,  128.96575833333333 ),
            num: 308 
        },
        {
            title: '일광 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.27 ,  129.23353055555555 ),
            num: 309 
        },
        {
            title: '영리해수욕장', 
            latlng: new kakao.maps.LatLng( 36.605968 ,  129.382599 ),
            num: 310 
        },
        {
            title: '일산 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.49559166666667 ,  129.43099999999998 ),
            num: 311 
        },
        {
            title: '원안해수욕장', 
            latlng: new kakao.maps.LatLng( 36.709076 ,  126.22963 ),
            num: 312 
        },
        {
            title: '진하 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.38356388888889 ,  129.34582222222224 ),
            num: 313 
        },
        {
            title: '비진도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.71975555555556 ,  128.46019166666665 ),
            num: 314 
        },
        {
            title: '덕포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.91258333333333 ,  128.71259166666667 ),
            num: 315 
        },
        {
            title: '와현모래숲해변', 
            latlng: new kakao.maps.LatLng( 34.81268333333333 ,  128.70583888888888 ),
            num: 316 
        },
        {
            title: '흥남 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.960061111111116 ,  128.71505 ),
            num: 317 
        },
        {
            title: '음포해수욕장', 
            latlng: new kakao.maps.LatLng( 36.847019 ,  126.287651 ),
            num: 318 
        },
        {
            title: '황포 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.02112777777778 ,  128.6762472222222 ),
            num: 319 
        },
        {
            title: '농소몽돌 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.0068 ,  128.69521944444446 ),
            num: 320 
        },
        {
            title: '구조라 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.808305555555556 ,  128.69088333333335 ),
            num: 321 
        },
        {
            title: '학동흑진주몽돌해변', 
            latlng: new kakao.maps.LatLng( 34.77328611111111 ,  128.64050555555554 ),
            num: 322 
        },
        {
            title: '명사 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.726144444444444 ,  128.60385277777777 ),
            num: 323 
        },
        {
            title: '함목 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.73921388888889 ,  128.65267500000002 ),
            num: 324 
        },
        {
            title: '여차몽돌 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.71350833333334 ,  128.626375 ),
            num: 325 
        },
        {
            title: '설리 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.71 ,  128.026 ),
            num: 326 
        },
        {
            title: '상주은모래비치', 
            latlng: new kakao.maps.LatLng( 34.72031388888889 ,  127.98820555555555 ),
            num: 327 
        },
        {
            title: '먼동해수욕장', 
            latlng: new kakao.maps.LatLng( 36.893326 ,  126.172714 ),
            num: 328 
        },
        {
            title: '송정솔바람해변', 
            latlng: new kakao.maps.LatLng( 34.721183333333336 ,  128.02314444444445 ),
            num: 329 
        },
        {
            title: '두곡.월포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.76774722222222 ,  127.90732777777778 ),
            num: 330 
        },
        {
            title: '사촌 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.741686111111115 ,  127.85549444444443 ),
            num: 331 
        },
        {
            title: '남일대 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.926205555555555 ,  128.09666111111113 ),
            num: 332 
        },
        {
            title: '덕동 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.63542777777778 ,  128.23739166666667 ),
            num: 333 
        },
        {
            title: '수륙 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.823800000000006 ,  128.44 ),
            num: 334 
        },
        {
            title: '사목해수욕장', 
            latlng: new kakao.maps.LatLng( 36.939106 ,  126.288071 ),
            num: 335 
        },
        {
            title: '황금산몽돌해변', 
            latlng: new kakao.maps.LatLng( 36.984974 ,  126.345932 ),
            num: 336 
        },
        {
            title: '봉암몽돌 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.759880555555554 ,  128.51143055555556 ),
            num: 337 
        },
        {
            title: '하트해변', 
            latlng: new kakao.maps.LatLng( 37.065926 ,  129.406967 ),
            num: 338 
        },
        {
            title: '월천해변', 
            latlng: new kakao.maps.LatLng( 37.159927 ,  129.354126 ),
            num: 339 
        },
        {
            title: '물안(옆개) 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.01114722222222 ,  128.6532 ),
            num: 340 
        },
        {
            title: '덕원 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.77883055555556 ,  128.57549166666666 ),
            num: 341 
        },
        {
            title: '표선해비치', 
            latlng: new kakao.maps.LatLng( 33.327275 ,  126.84339999999999 ),
            num: 342 
        },
        {
            title: '화순금모래 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.23623888888889 ,  126.31920277777778 ),
            num: 343 
        },
        {
            title: '신양섭지코지 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.43462222222222 ,  126.9237638888889 ),
            num: 344 
        },
        {
            title: '곽지과물 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.45064722222222 ,  126.30459722222221 ),
            num: 345 
        },
        {
            title: '협재 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.39445833333333 ,  126.23996666666667 ),
            num: 346 
        },
        {
            title: '중문ㆍ색달 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.244794444444445 ,  126.41160833333333 ),
            num: 347 
        },
        {
            title: '이호테우 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.49799166666667 ,  126.45268611111112 ),
            num: 348 
        },
        {
            title: '삼양검은모래 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.525725 ,  126.58600277777778 ),
            num: 349 
        },
        {
            title: '임원해변', 
            latlng: new kakao.maps.LatLng( 37.205963 ,  129.356552 ),
            num: 350 
        },
        {
            title: '노가리해수욕장', 
            latlng: new kakao.maps.LatLng( 37.260925 ,  126.463242 ),
            num: 351 
        },
        {
            title: '함덕서우봉 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.543441666666666 ,  126.66944722222223 ),
            num: 352 
        },
        {
            title: '하고수동 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.51330277777778 ,  126.95856111111111 ),
            num: 353 
        },
        {
            title: '김녕성세기 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.557988888888886 ,  126.75972777777778 ),
            num: 354 
        },
        {
            title: '금능으뜸원 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.38990833333333 ,  126.23517777777778 ),
            num: 355 
        },
        {
            title: '낭하리해변', 
            latlng: new kakao.maps.LatLng( 37.260643 ,  126.521141 ),
            num: 356 
        },
        {
            title: '하도 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.512905555555555 ,  126.89873333333334 ),
            num: 357 
        },
        {
            title: '용담리해변', 
            latlng: new kakao.maps.LatLng( 37.260925 ,  126.463242 ),
            num: 358 
        },
        {
            title: '신남해변', 
            latlng: new kakao.maps.LatLng( 37.253918 ,  129.301132 ),
            num: 359 
        },
        {
            title: '사량 대항 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.8508 ,  128.213 ),
            num: 360 
        },
        {
            title: '덕적도 능동자갈마당', 
            latlng: new kakao.maps.LatLng( 37.261925 ,  126.115814 ),
            num: 361 
        },
        {
            title: '구봉솔숲해수욕장', 
            latlng: new kakao.maps.LatLng( 37.260643 ,  126.521141 ),
            num: 362 
        },
        {
            title: '후포 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.67583055555556 ,  129.44218333333333 ),
            num: 363 
        },
        {
            title: '소청예동 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.77 ,  124.72 ),
            num: 364 
        },
        {
            title: '사곶 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.95 ,  124.71 ),
            num: 365 
        },
        {
            title: '구리동 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.67105833333333 ,  125.69814444444445 ),
            num: 366 
        },
        {
            title: '실미 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.4 ,  126.4 ),
            num: 367 
        },
        {
            title: '황성금리 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.53 ,  126.06 ),
            num: 368 
        },
        {
            title: '추포 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.8014527777778 ,  126.067975 ),
            num: 369 
        },
        {
            title: '신도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.58 ,  125.97 ),
            num: 370 
        },
        {
            title: '배낭기미 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.69 ,  125.43 ),
            num: 371 
        },
        {
            title: '홍도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.69 ,  125.19 ),
            num: 372 
        },
        {
            title: '낭도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.6 ,  127.54 ),
            num: 373 
        },
        {
            title: '정강 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.22 ,  127.24 ),
            num: 374 
        },
        {
            title: '대풍 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.24 ,  127.24 ),
            num: 375 
        },
        {
            title: '구시포 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.44513055555555 ,  126.43 ),
            num: 376 
        },
        {
            title: '하효쇠소깍 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.252491666666664 ,  126.62389444444443 ),
            num: 377 
        },
        {
            title: '종달 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.496161111111114 ,  126.91323333333334 ),
            num: 378 
        },
        {
            title: '서빈백사 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.50235555555555 ,  126.94493333333334 ),
            num: 379 
        },
        {
            title: '추자모진이 해수욕장', 
            latlng: new kakao.maps.LatLng( 33.945611111111106 ,  126.33491944444444 ),
            num: 380 
        },
        {
            title: '밤섬 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.33 ,  126.36 ),
            num: 381 
        },
        {
            title: '몽돌해수욕장 (옹진군)', 
            latlng: new kakao.maps.LatLng( 37.260925 ,  126.463242 ),
            num: 382 
        },
        {
            title: '방아머리해수욕장', 
            latlng: new kakao.maps.LatLng( 37.306412 ,  126.579468 ),
            num: 383 
        },
        {
            title: '당너머 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.35 ,  126.35 ),
            num: 384 
        },
        {
            title: '호도 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.3 ,  126.27 ),
            num: 385 
        },
        {
            title: '초곡해수욕장', 
            latlng: new kakao.maps.LatLng( 37.299969 ,  129.303513 ),
            num: 386 
        },
        {
            title: '곰섬 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.58751111111111 ,  126.29155277777778 ),
            num: 387 
        },
        {
            title: '백리포(방주골) 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.81108888888889 ,  126.1545638888889 ),
            num: 388 
        },
        {
            title: '사곡 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.9 ,  128.57 ),
            num: 389 
        },
        {
            title: '구영 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.03 ,  128.69 ),
            num: 390 
        },
        {
            title: '망치해변 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.81 ,  128.67 ),
            num: 391 
        },
        {
            num: 392 
        },
        {
            title: '한재밑해변', 
            latlng: new kakao.maps.LatLng( 37.395821 ,  129.192352 ),
            num: 393 
        },
        {
            title: '거잠포해변', 
            latlng: new kakao.maps.LatLng( 37.399452 ,  126.406219 ),
            num: 394 
        },
        {
            title: '용유도 마시안해변', 
            latlng: new kakao.maps.LatLng( 37.445557 ,  126.406509 ),
            num: 395 
        },
        {
            title: '선녀바위해수욕장', 
            latlng: new kakao.maps.LatLng( 37.445557 ,  126.406509 ),
            num: 396 
        },
        {
            title: '용유도해변', 
            latlng: new kakao.maps.LatLng( 37.445557 ,  126.406509 ),
            num: 397 
        },
        {
            title: '왜목마을 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.04 ,  126.53 ),
            num: 398 
        },
        {
            title: '감추해변', 
            latlng: new kakao.maps.LatLng( 37.48978 ,  129.138916 ),
            num: 399 
        },
        {
            title: '한섬해변&한섬감성바닷길', 
            latlng: new kakao.maps.LatLng( 37.535858 ,  129.14119 ),
            num: 400 
        },
        {
            title: '고불개해변', 
            latlng: new kakao.maps.LatLng( 37.535858 ,  129.14119 ),
            num: 401 
        },
        {
            title: '하평해변(동해)', 
            latlng: new kakao.maps.LatLng( 37.535858 ,  129.14119 ),
            num: 402 
        },
        {
            title: '염전해변', 
            latlng: new kakao.maps.LatLng( 37.725513 ,  128.975494 ),
            num: 403 
        },
        {
            title: '북분리 해수욕장', 
            latlng: new kakao.maps.LatLng( 37.988155 ,  128.748896 ),
            num: 404 
        },
        {
            title: '순포해변', 
            latlng: new kakao.maps.LatLng( 37.821095 ,  128.863083 ),
            num: 405 
        },
        {
            title: '대청도 농여해변', 
            latlng: new kakao.maps.LatLng( 37.853374 ,  124.714096 ),
            num: 406 
        },
        {
            title: '소돌해수욕장', 
            latlng: new kakao.maps.LatLng( 37.914974 ,  128.808792 ),
            num: 407 
        },
        {
            title: '고파도 해수욕장', 
            latlng: new kakao.maps.LatLng( 36.91 ,  126.34 ),
            num: 408 
        },
        {
            title: '광암 해수욕장', 
            latlng: new kakao.maps.LatLng( 35.1 ,  128.5 ),
            num: 409 
        },
        {
            title: '청시행비치', 
            latlng: new kakao.maps.LatLng( 37.914974 ,  128.808792 ),
            num: 410 
        },
        {
            title: '웅천 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.74 ,  127.67 ),
            num: 411 
        },
        {
            title: '중광정해변', 
            latlng: new kakao.maps.LatLng( 38.028446 ,  128.717989 ),
            num: 412 
        },
        {
            title: '화진포콘도 해수욕장', 
            latlng: new kakao.maps.LatLng( 38.47531 ,  128.4409 ),
            num: 413 
        },
        {
            title: '서도 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.05 ,  127.29 ),
            num: 414 
        },
        {
            title: '설레미 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.96 ,  126.14 ),
            num: 415 
        },
        {
            title: '짱뚱어 해수욕장', 
            latlng: new kakao.maps.LatLng( 34.99 ,  126.13 ),
            num: 416 
        },
        {
            title: '향호해수욕장', 
            latlng: new kakao.maps.LatLng( 37.914974 ,  128.808792 ),
            num: 417 
        },
        {
            title: '백령도 콩돌해변', 
            latlng: new kakao.maps.LatLng( 37.899521 ,  124.713158 ),
            num: 418 
        },
        {
            title: '애견전용해수욕장 멍비치', 
            latlng: new kakao.maps.LatLng( 37.962708 ,  128.752335 ),
            num: 419 
        },
        {
            title: '38해변', 
            latlng: new kakao.maps.LatLng( 38.008842 ,  128.754349 ),
            num: 420 
        }
    ];
    return positions;
}
const beachData = () =>{
    const beachdata = [
        {
            title: "을왕리 해수욕장",
            num: 1,
            longitude: 126.37209444444444,
            latitude: 37.44713888888889,
            code: "BCH110"
        
        },
        {
            title: "왕산 해수욕장",
            num: 2,
            longitude: 126.37121666666665,
            latitude: 37.45615277777778,
            code: "BCH226"
        
        },
        {
            title: "하나개 해수욕장",
            num: 3,
            longitude: 126.41125277777779,
            latitude: 37.38684722222222,
            code: "BCH243"
        
        },
        {
            title: "사계해안",
            num: 4,
            longitude: 126.326645,
            latitude: 33.22858,
            code: "BCH216"
        
        },
        {
            title: "하모해변",
            num: 5,
            longitude: 126.272202,
            latitude: 33.228752,
            code: "BCH092"
        
        },
        {
            title: "민머루 해수욕장",
            num: 6,
            longitude: 126.33353055555555,
            latitude: 37.65143055555556,
            code: "none"
        
        },
        {
            title: "장경리 해수욕장",
            num: 7,
            longitude: 126.45091388888889,
            latitude: 37.277875,
            code: "BCH261"
        
        },
        {
            title: "옹암 해수욕장",
            num: 8,
            longitude: 126.35617222222221,
            latitude: 37.53479166666666,
            code: "none"
        
        },
        {
            title: "논짓물",
            num: 9,
            longitude: 126.381081,
            latitude: 33.228378,
            code: "BCH528"
        
        },
        {
            title: "수기 해수욕장",
            num: 10,
            longitude: 126.43191666666667,
            latitude: 37.543575,
            code: "none"
        
        },
        {
            title: "동막 해수욕장",
            num: 11,
            longitude: 126.45818611111112,
            latitude: 37.59238333333334,
            code: "BCH126"
        
        },
        {
            title: "서포리 해수욕장",
            num: 12,
            longitude: 126.11484444444444,
            latitude: 37.219430555555554,
            code: "BCH118"
        
        },
        {
            title: "십리포 해수욕장",
            num: 13,
            longitude: 126.48355555555555,
            latitude: 37.281394444444445,
            code: "none"
        
        },
        {
            title: "굴업 해수욕장",
            num: 14,
            longitude: 125.98377777777777,
            latitude: 37.192161111111105,
            code: "BCH201"
        
        },
        {
            title: "떼뿌루 해수욕장",
            num: 15,
            longitude: 126.174975,
            latitude: 37.21242222222222,
            code: "none"
        
        },
        {
            title: "밧지름 해수욕장",
            num: 16,
            longitude: 126.14048611111112,
            latitude: 37.21476666666667,
            code: "BCH090"
        
        },
        {
            title: "한담해변",
            num: 17,
            longitude: 126.327759,
            latitude: 33.456364,
            code: "BCH089"
        
        },
        {
            title: "알작지",
            num: 18,
            longitude: 126.437309,
            latitude: 33.501507,
            code: "none"
        
        },
        {
            title: "한들 해수욕장",
            num: 19,
            longitude: 126.34704722222222,
            latitude: 37.528733333333335,
            code: "BCH249"
        
        },
        {
            title: "큰풀안 해수욕장",
            num: 20,
            longitude: 126.26336111111111,
            latitude: 37.16922222222222,
            code: "BCH168"
        
        },
        {
            title: "장골 해수욕장",
            num: 21,
            longitude: 126.31468333333333,
            latitude: 37.24935833333333,
            code: "BCH031"
        
        },
        {
            title: "벌안 해수욕장",
            num: 22,
            longitude: 126.22226666666667,
            latitude: 37.18151666666667,
            code: "BCH349"
        
        },
        {
            title: "지두리 해수욕장",
            num: 23,
            longitude: 124.67928611111111,
            latitude: 37.82120833333334,
            code: "BCH048"
        
        },
        {
            title: "검멀레해변",
            num: 24,
            longitude: 126.983902,
            latitude: 33.497463,
            code: "BCH505"
        
        },
        {
            title: "세화해변",
            num: 25,
            longitude: 126.874588,
            latitude: 33.49852,
            code: "BCH248"
        
        },
        {
            title: "모래울 해수욕장",
            num: 26,
            longitude: 124.6846888888889,
            latitude: 37.81381666666666,
            code: "none"
        
        },
        {
            title: "평대해변",
            num: 27,
            longitude: 126.820488,
            latitude: 33.544586,
            code: "BCH260"
        
        },
        {
            title: "제주신흥해수욕장",
            num: 28,
            longitude: 126.656403,
            latitude: 33.545845,
            code: "BCH093"
        
        },
        {
            title: "월정리해변(월정리해수욕장)",
            num: 29,
            longitude: 126.820488,
            latitude: 33.544586,
            code: "BCH094"
        
        },
        {
            title: "큰말 해수욕장",
            num: 30,
            longitude: 126.30634166666667,
            latitude: 37.25273333333333,
            code: "BCH021"
        
        },
        {
            title: "진촌 해수욕장",
            num: 31,
            longitude: 126.33486666666666,
            latitude: 37.55046944444444,
            code: "BCH229"
        
        },
        {
            title: "보길도 뾰쪽산과 보옥리 공룡알해변",
            num: 32,
            longitude: 126.496719,
            latitude: 34.140064,
            code: "BCH043"
        
        },
        {
            title: "진산리해수욕장",
            num: 33,
            longitude: 126.662285,
            latitude: 34.139072,
            code: "BCH002"
        
        },
        {
            title: "작은풀안 해수욕장",
            num: 34,
            longitude: 126.25745833333333,
            latitude: 37.170575,
            code: "BCH173"
        
        },
        {
            title: "이일레 해수욕장",
            num: 35,
            longitude: 126.30210277777778,
            latitude: 37.16471111111111,
            code: "BCH117"
        
        },
        {
            title: "문갑 해수욕장",
            num: 36,
            longitude: 126.10709444444444,
            latitude: 37.17881944444444,
            code: "BCH098"
        
        },
        {
            title: "계남 해수욕장",
            num: 37,
            longitude: 126.27,
            latitude: 37.17,
            code: "BCH267"
        
        },
        {
            title: "미라리해수욕장",
            num: 38,
            longitude: 126.662285,
            latitude: 34.139072,
            code: "BCH071"
        
        },
        {
            title: "제부도 해수욕장",
            num: 39,
            longitude: 126.61729444444444,
            latitude: 37.16549444444444,
            code: "BCH266"
        
        },
        {
            title: "궁평리 해수욕장",
            num: 40,
            longitude: 126.68505277777778,
            latitude: 37.12104444444444,
            code: "BCH316"
        
        },
        {
            title: "대천 해수욕장",
            num: 41,
            longitude: 126.51,
            latitude: 36.31,
            code: "none"
        
        },
        {
            title: "벌천포 해수욕장",
            num: 42,
            longitude: 126.34,
            latitude: 36.97,
            code: "none"
        
        },
        {
            title: "춘장대 해수욕장",
            num: 43,
            longitude: 126.52,
            latitude: 36.16,
            code: "BCH163"
        
        },
        {
            title: "꽃지 해수욕장",
            num: 44,
            longitude: 126.33,
            latitude: 36.49,
            code: "BCH245"
        
        },
        {
            title: "구름포 해수욕장",
            num: 45,
            longitude: 126.15,
            latitude: 36.84,
            code: "BCH185"
        
        },
        {
            title: "마검포 해수욕장",
            num: 46,
            longitude: 126.29,
            latitude: 36.61,
            code: "BCH066"
        
        },
        {
            title: "지리해수욕장",
            num: 47,
            longitude: 126.883636,
            latitude: 34.182987,
            code: "BCH323"
        
        },
        {
            title: "용두 해수욕장",
            num: 48,
            longitude: 126.54,
            latitude: 36.26,
            code: "BCH151"
        
        },
        {
            title: "독산(홀뫼) 해수욕장",
            num: 49,
            longitude: 126.53,
            latitude: 36.22,
            code: "BCH353"
        
        },
        {
            title: "장안 해수욕장",
            num: 50,
            longitude: 126.53,
            latitude: 36.2,
            code: "BCH227"
        
        },
        {
            title: "무창포 해수욕장",
            num: 51,
            longitude: 126.53,
            latitude: 36.24,
            code: "BCH222"
        
        },
        {
            title: "밧개 해수욕장",
            num: 52,
            longitude: 126.33,
            latitude: 36.53,
            code: "BCH277"
        
        },
        {
            title: "두여 해수욕장",
            num: 53,
            longitude: 126.33,
            latitude: 36.540841666666665,
            code: "BCH214"
        
        },
        {
            title: "안면 해수욕장",
            num: 54,
            longitude: 126.32904444444443,
            latitude: 36.54789722222222,
            code: "BCH206"
        
        },
        {
            title: "삼봉 해수욕장",
            num: 55,
            longitude: 126.31316666666666,
            latitude: 36.571288888888894,
            code: "BCH138"
        
        },
        {
            title: "백사장 해수욕장",
            num: 56,
            longitude: 126.3140611111111,
            latitude: 36.57886944444445,
            code: "none"
        
        },
        {
            title: "방포 해수욕장",
            num: 57,
            longitude: 126.33416666666666,
            latitude: 36.50844166666667,
            code: "BCH073"
        
        },
        {
            title: "기지포 해수욕장",
            num: 58,
            longitude: 126.32421944444444,
            latitude: 36.56061388888889,
            code: "BCH253"
        
        },
        {
            title: "샛별 해수욕장",
            num: 59,
            longitude: 126.33,
            latitude: 36.44716944444444,
            code: "BCH025"
        
        },
        {
            title: "정도리해변",
            num: 60,
            longitude: 126.719452,
            latitude: 34.321442,
            code: "BCH015"
        
        },
        {
            title: "장삼포 해수욕장",
            num: 61,
            longitude: 126.3603,
            latitude: 36.42236111111111,
            code: "BCH268"
        
        },
        {
            title: "바람아래 해수욕장",
            num: 62,
            longitude: 126.37929722222222,
            latitude: 36.412844444444445,
            code: "BCH158"
        
        },
        {
            title: "몽산포 해수욕장",
            num: 63,
            longitude: 126.28751111111112,
            latitude: 36.66959166666666,
            code: "BCH209"
        
        },
        {
            title: "달산포 해수욕장",
            num: 64,
            longitude: 126.296575,
            latitude: 36.65375833333333,
            code: "none"
        
        },
        {
            title: "청포대 해수욕장",
            num: 65,
            longitude: 126.29835555555556,
            latitude: 36.63936388888889,
            code: "none"
        
        },
        {
            title: "갈음이 해수욕장",
            num: 66,
            longitude: 126.15,
            latitude: 36.7,
            code: "BCH069"
        
        },
        {
            title: "연포 해수욕장",
            num: 67,
            longitude: 126.21065,
            latitude: 36.69359166666666,
            code: "BCH005"
        
        },
        {
            title: "천리포 해수욕장",
            num: 68,
            longitude: 126.14934722222223,
            latitude: 36.80327222222222,
            code: "BCH269"
        
        },
        {
            title: "의항 해수욕장",
            num: 69,
            longitude: 126.15973611111112,
            latitude: 36.82783333333334,
            code: "none"
        
        },
        {
            title: "만리포 해수욕장",
            num: 70,
            longitude: 126.14316944444445,
            latitude: 36.78802222222222,
            code: "BCH120"
        
        },
        {
            title: "어은돌 해수욕장",
            num: 71,
            longitude: 126.12956944444444,
            latitude: 36.7506,
            code: "BCH119"
        
        },
        {
            title: "파도리 해수욕장",
            num: 72,
            longitude: 126.1313111111111,
            latitude: 36.73815833333333,
            code: "BCH064"
        
        },
        {
            title: "학암포 해수욕장",
            num: 73,
            longitude: 126.20438611111112,
            latitude: 36.90316388888889,
            code: "BCH190"
        
        },
        {
            title: "구례포 해수욕장",
            num: 74,
            longitude: 126.19701666666667,
            latitude: 36.8875,
            code: "BCH134"
        
        },
        {
            title: "신두리 해수욕장",
            num: 75,
            longitude: 126.19,
            latitude: 36.838705555555556,
            code: "none"
        
        },
        {
            title: "오천몽돌해변",
            num: 76,
            longitude: 127.219162,
            latitude: 34.407879,
            code: "BCH165"
        
        },
        {
            title: "꾸지나무골 해수욕장",
            num: 77,
            longitude: 126.29205555555555,
            latitude: 36.93515555555555,
            code: "BCH514"
        
        },
        {
            title: "난지도 해수욕장",
            num: 78,
            longitude: 126.42326944444444,
            latitude: 37.04736666666666,
            code: "none"
        
        },
        {
            title: "원산도 해수욕장",
            num: 79,
            longitude: 126.43,
            latitude: 36.36,
            code: "none"
        
        },
        {
            title: "송평해변",
            num: 80,
            longitude: 126.443359,
            latitude: 34.414524,
            code: "BCH142"
        
        },
        {
            title: "남성리해수욕장",
            num: 81,
            longitude: 127.38826,
            latitude: 34.542812,
            code: "BCH343"
        
        },
        {
            title: "오봉산 해수욕장",
            num: 82,
            longitude: 126.4,
            latitude: 36.37,
            code: "BCH177"
        
        },
        {
            title: "명장섬 해수욕장",
            num: 83,
            longitude: 126.34,
            latitude: 36.4,
            code: "BCH013"
        
        },
        {
            title: "덕동몽돌해수욕장",
            num: 84,
            longitude: 128.16687,
            latitude: 34.574329,
            code: "BCH034"
        
        },
        {
            title: "유동해변",
            num: 85,
            longitude: 128.223953,
            latitude: 34.618801,
            code: "none"
        
        },
        {
            title: "당산 해수욕장",
            num: 86,
            longitude: 126.27,
            latitude: 36.27,
            code: "none"
        
        },
        {
            title: "통개 해수욕장",
            num: 87,
            longitude: 126.14265833333334,
            latitude: 36.72806944444444,
            code: "BCH059"
        
        },
        {
            title: "띠밭넘어해변",
            num: 88,
            longitude: 125.833275,
            latitude: 34.598328,
            code: "BCH211"
        
        },
        {
            title: "거멀너머 해수욕장",
            num: 89,
            longitude: 126.35,
            latitude: 36.35,
            code: "BCH144"
        
        },
        {
            title: "진너머 해수욕장",
            num: 90,
            longitude: 126.35,
            latitude: 36.35,
            code: "BCH164"
        
        },
        {
            title: "선유도 해수욕장",
            num: 91,
            longitude: 126.41141666666667,
            latitude: 35.816855555555556,
            code: "BCH086"
        
        },
        {
            "num": 92 
        },
        {
            title: "모항 갯벌 해수욕장",
            num: 93,
            longitude: 126.507543,
            latitude: 35.582155,
            code: "BCH014"
        
        },
        {
            title: "흰작살해변",
            num: 94,
            longitude: 128.279526,
            latitude: 34.617516,
            code: "none"
        
        },
        {
            title: "격포 해수욕장",
            num: 95,
            longitude: 126.46926666666667,
            latitude: 35.63001666666667,
            code: "BCH150"
        
        },
        {
            title: "고사포 해수욕장",
            num: 96,
            longitude: 126.50863333333334,
            latitude: 35.66284722222222,
            code: "BCH181"
        
        },
        {
            title: "변산 해수욕장",
            num: 97,
            longitude: 126.52960277777778,
            latitude: 35.68028611111111,
            code: "none"
        
        },
        {
            title: "위도 해수욕장",
            num: 98,
            longitude: 126.28,
            latitude: 35.61,
            code: "none"
        
        },
        {
            title: "외달도 해수욕장",
            num: 99,
            longitude: 126.29689166666667,
            latitude: 34.781933333333335,
            code: "none"
        
        },
        {
            title: "천하몽돌해수욕장",
            num: 100,
            longitude: 128.00444,
            latitude: 34.715115,
            code: "none"
        
        },
        {
            title: "안도 해수욕장",
            num: 101,
            longitude: 127.812671,
            latitude: 34.490681,
            code: "none"
        
        },
        {
            title: "장등 해수욕장",
            num: 102,
            longitude: 127.61,
            latitude: 34.65,
            code: "BCH179"
        
        },
        {
            title: "모사금 해수욕장",
            num: 103,
            longitude: 127.76,
            latitude: 34.8,
            code: "BCH210"
        
        },
        {
            title: "만성리검은모래 해수욕장",
            num: 104,
            longitude: 127.744882,
            latitude: 34.777383,
            code: "BCH169"
        
        },
        {
            title: "신덕 해수욕장",
            num: 105,
            longitude: 127.77,
            latitude: 34.82,
            code: "BCH139"
        
        },
        {
            title: "방죽포 해수욕장",
            num: 106,
            longitude: 127.79,
            latitude: 34.63,
            code: "none"
        
        },
        {
            title: "사도 해수욕장",
            num: 107,
            longitude: 127.56,
            latitude: 34.59,
            code: "BCH239"
        
        },
        {
            title: "거문도(유림) 해수욕장",
            num: 108,
            longitude: 127.289863888889,
            latitude: 34.01,
            code: "BCH242"
        
        },
        {
            title: "남해 가천 해변과 암수바위",
            num: 109,
            longitude: 127.89312,
            latitude: 34.717342,
            code: "BCH215"
        
        },
        {
            title: "연대도 해수욕장",
            num: 110,
            longitude: 128.395645,
            latitude: 34.752064,
            code: "BCH309"
        
        },
        {
            title: "선구몽돌해변",
            num: 111,
            longitude: 127.837463,
            latitude: 34.718407,
            code: "BCH113"
        
        },
        {
            title: "용동 해수욕장",
            num: 112,
            longitude: 127.18,
            latitude: 34.63,
            code: "BCH114"
        
        },
        {
            title: "익금 해수욕장",
            num: 113,
            longitude: 127.14468333333333,
            latitude: 34.42932222222222,
            code: "BCH124"
        
        },
        {
            title: "연소 해수욕장",
            num: 114,
            longitude: 127.12,
            latitude: 34.45,
            code: "BCH246"
        
        },
        {
            title: "발포 해수욕장",
            num: 115,
            longitude: 127.35669999999999,
            latitude: 34.49176666666667,
            code: "BCH193"
        
        },
        {
            title: "염포 해수욕장",
            num: 116,
            longitude: 127.49,
            latitude: 34.43,
            code: "none"
        
        },
        {
            title: "나로우주 해수욕장",
            num: 117,
            longitude: 127.46812222222222,
            latitude: 34.470619444444445,
            code: "none"
        
        },
        {
            title: "풍류 해수욕장",
            num: 118,
            longitude: 127.23,
            latitude: 34.66,
            code: "BCH305"
        
        },
        {
            title: "대전 해수욕장",
            num: 119,
            longitude: 127.27055277777778,
            latitude: 34.71276666666667,
            code: "none"
        
        },
        {
            title: "남열해돋이 해수욕장",
            num: 120,
            longitude: 127.48668611111111,
            latitude: 34.57895277777778,
            code: "BCH104"
        
        },
        {
            title: "덕흥 해수욕장",
            num: 121,
            longitude: 127.45916111111111,
            latitude: 34.52704722222222,
            code: "BCH137"
        
        },
        {
            title: "율포 해수욕장",
            num: 122,
            longitude: 127.08851944444444,
            latitude: 34.66974444444444,
            code: "BCH322"
        
        },
        {
            title: "수문 해수욕장",
            num: 123,
            longitude: 127.03490833333333,
            latitude: 34.63515833333333,
            code: "none"
        
        },
        {
            title: "항도몽돌해수욕장과 항도방파제",
            num: 124,
            longitude: 128.061523,
            latitude: 34.759705,
            code: "none"
        
        },
        {
            title: "사구미 해수욕장",
            num: 125,
            longitude: 126.579191666667,
            latitude: 34.3205555555556,
            code: "BCH259"
        
        },
        {
            title: "하트해변(하누넘해수욕장)",
            num: 126,
            longitude: 125.888618,
            latitude: 34.735676,
            code: "BCH085"
        
        },
        {
            title: "송호땅끝 해수욕장",
            num: 127,
            longitude: 126.51900833333333,
            latitude: 34.314302777777776,
            code: "BCH033"
        
        },
        {
            title: "홀통 해수욕장",
            num: 128,
            longitude: 126.33632222222222,
            latitude: 35.06064166666666,
            code: "BCH040"
        
        },
        {
            title: "톱머리 해수욕장",
            num: 129,
            longitude: 126.38693055555557,
            latitude: 34.968044444444445,
            code: "BCH004"
        
        },
        {
            title: "구미동해변 (구미동해수욕장)",
            num: 130,
            longitude: 127.840019,
            latitude: 34.809925,
            code: "BCH161"
        
        },
        {
            title: "돌머리 해수욕장",
            num: 131,
            longitude: 126.43910277777778,
            latitude: 35.08653888888889,
            code: "BCH180"
        
        },
        {
            title: "모상개해수욕장",
            num: 132,
            longitude: 128.064392,
            latitude: 34.851227,
            code: "BCH049"
        
        },
        {
            title: "가마미 해수욕장",
            num: 133,
            longitude: 126.40825833333334,
            latitude: 35.398558333333334,
            code: "BCH174"
        
        },
        {
            title: "송이도 해수욕장",
            num: 134,
            longitude: 126.152725,
            latitude: 35.27435555555555,
            code: "none"
        
        },
        {
            title: "금일해당화 해수욕장",
            num: 135,
            longitude: 127.057436,
            latitude: 34.331052,
            code: "none"
        
        },
        {
            title: "신지명사십리 해수욕장",
            num: 136,
            longitude: 126.8086,
            latitude: 34.32637777777778,
            code: "BCH084"
        
        },
        {
            title: "가사동백숲 해수욕장",
            num: 137,
            longitude: 126.928274,
            latitude: 34.370335,
            code: "none"
        
        },
        {
            title: "동고 해수욕장",
            num: 138,
            longitude: 126.88034444444443,
            latitude: 34.32940277777778,
            code: "BCH318"
        
        },
        {
            title: "지리청송 해수욕장",
            num: 139,
            longitude: 126.86186388888888,
            latitude: 34.19829444444444,
            code: "BCH197"
        
        },
        {
            title: "통리솔밭 해수욕장",
            num: 140,
            longitude: 126.57914166666666,
            latitude: 34.15792777777778,
            code: "none"
        
        },
        {
            title: "중리 해수욕장",
            num: 141,
            longitude: 126.59,
            latitude: 34.16,
            code: "BCH250"
        
        },
        {
            title: "예송갯돌 해수욕장",
            num: 142,
            longitude: 126.56408888888889,
            latitude: 34.14221944444444,
            code: "none"
        
        },
        {
            title: "금곡 해수욕장",
            num: 143,
            longitude: 126.95940277777778,
            latitude: 34.320036111111115,
            code: "none"
        
        },
        {
            title: "가계 해수욕장",
            num: 144,
            longitude: 126.35513333333333,
            latitude: 34.435027777777776,
            code: "none"
        
        },
        {
            title: "금갑 해수욕장",
            num: 145,
            longitude: 126.27755555555555,
            latitude: 34.395069444444445,
            code: "BCH003"
        
        },
        {
            title: "죽림해수욕장",
            num: 146,
            longitude: 128.566238,
            latitude: 34.839314,
            code: "BCH200"
        
        },
        {
            title: "관매도 해수욕장",
            num: 147,
            longitude: 126.05194999999999,
            latitude: 34.246719444444444,
            code: "BCH035"
        
        },
        {
            title: "신전 해수욕장",
            num: 148,
            longitude: 126.073225,
            latitude: 34.283319444444444,
            code: "BCH324"
        
        },
        {
            title: "분계 해수욕장",
            num: 149,
            longitude: 126.05,
            latitude: 34.88,
            code: "BCH152"
        
        },
        {
            title: "우전 해수욕장",
            num: 150,
            longitude: 126.13660833333334,
            latitude: 34.971247222222225,
            code: "BCH097"
        
        },
        {
            title: "대광 해수욕장",
            num: 151,
            longitude: 126.06903333333332,
            latitude: 35.10315555555556,
            code: "BCH175"
        
        },
        {
            title: "백길 해수욕장",
            num: 152,
            longitude: 126.03281666666666,
            latitude: 34.85787777777778,
            code: "BCH106"
        
        },
        {
            "num": 153 
        },
        {
            title: "하트 해수욕장",
            num: 154,
            longitude: 125.894625,
            latitude: 34.74975277777778,
            code: "BCH310"
        
        },
        {
            title: "시목 해수욕장",
            num: 155,
            longitude: 125.9545638888889,
            latitude: 34.672244444444445,
            code: "BCH256"
        
        },
        {
            title: "돈목 해수욕장",
            num: 156,
            longitude: 125.827436,
            latitude: 34.609055,
            code: "BCH091"
        
        },
        {
            title: "금장 해수욕장",
            num: 157,
            longitude: 127.16492222222223,
            latitude: 34.43546944444444,
            code: "BCH207"
        
        },
        {
            title: "무술목 해수욕장",
            num: 158,
            longitude: 127.77630277777777,
            latitude: 34.68375555555555,
            code: "none"
        
        },
        {
            title: "화포해변",
            num: 159,
            longitude: 127.506607,
            latitude: 34.861435,
            code: "BCH254"
        
        },
        {
            title: "둔장해변",
            num: 160,
            longitude: 126.055847,
            latitude: 34.918835,
            code: "BCH321"
        
        },
        {
            title: "배알도해수욕장",
            num: 161,
            longitude: 127.732155,
            latitude: 34.949291,
            code: "BCH354"
        
        },
        {
            title: "두모몽돌해변",
            num: 162,
            longitude: 128.683334,
            latitude: 34.973606,
            code: "BCH199"
        
        },
        {
            title: "조금나루해수욕장",
            num: 163,
            longitude: 126.335541,
            latitude: 35.009872,
            code: "BCH079"
        
        },
        {
            title: "몰운대(부산 국가지질공원)",
            num: 164,
            longitude: 128.966751,
            latitude: 35.057079,
            code: "BCH302"
        
        },
        {
            title: "감지해변",
            num: 165,
            longitude: 129.078598,
            latitude: 35.053623,
            code: "none"
        
        },
        {
            title: "안악해수욕장",
            num: 166,
            longitude: 126.392288,
            latitude: 35.147102,
            code: "BCH234"
        
        },
        {
            title: "손죽 해수욕장",
            num: 167,
            longitude: 127.36,
            latitude: 34.29,
            code: "BCH083"
        
        },
        {
            title: "신흥 해수욕장",
            num: 168,
            longitude: 126.90784166666667,
            latitude: 34.18368888888889,
            code: "none"
        
        },
        {
            title: "나사해변(나사리해수욕장)",
            num: 169,
            longitude: 129.318481,
            latitude: 35.366867,
            code: "none"
        
        },
        {
            title: "모래미 해변",
            num: 170,
            longitude: 126.393661,
            latitude: 35.376293,
            code: "BCH016"
        
        },
        {
            title: "솔개해수욕장",
            num: 171,
            longitude: 129.374649,
            latitude: 35.364952,
            code: "BCH350"
        
        },
        {
            title: "강문 해수욕장",
            num: 172,
            longitude: 128.91798333333332,
            latitude: 37.796952777777776,
            code: "BCH521"
        
        },
        {
            "num": 173 
        },
        {
            title: "안목 해수욕장",
            num: 174,
            longitude: 128.94735,
            latitude: 37.773225,
            code: "none"
        
        },
        {
            title: "남항진 해수욕장",
            num: 175,
            longitude: 128.95475555555555,
            latitude: 37.76456944444445,
            code: "BCH171"
        
        },
        {
            title: "경포 해수욕장",
            num: 176,
            longitude: 128.90983055555557,
            latitude: 37.80433333333333,
            code: "BCH078"
        
        },
        {
            title: "사근진 해수욕장",
            num: 177,
            longitude: 128.90028055555555,
            latitude: 37.81154166666666,
            code: "BCH314"
        
        },
        {
            title: "순긋 해수욕장",
            num: 178,
            longitude: 128.89318333333333,
            latitude: 37.817797222222225,
            code: "BCH160"
        
        },
        {
            title: "주문진 해수욕장",
            num: 179,
            longitude: 128.81963888888887,
            latitude: 37.911230555555555,
            code: "BCH101"
        
        },
        {
            title: "주전몽돌해변",
            num: 180,
            longitude: 129.442917,
            latitude: 35.592129,
            code: "BCH156"
        
        },
        {
            title: "안인 해수욕장",
            num: 181,
            longitude: 128.99068055555554,
            latitude: 37.73485277777778,
            code: "BCH123"
        
        },
        {
            title: "정동진 해수욕장",
            num: 182,
            longitude: 129.0352866,
            latitude: 37.69155017,
            code: "BCH235"
        
        },
        {
            title: "등명 해수욕장",
            num: 183,
            longitude: 129.01841666666667,
            latitude: 37.703975,
            code: "none"
        
        },
        {
            title: "도직 해수욕장",
            num: 184,
            longitude: 129.0769156,
            latitude: 37.60299292,
            code: "BCH188"
        
        },
        {
            "num": 185 
        },
        {
            title: "금진 해수욕장",
            num: 186,
            longitude: 129.0497078,
            latitude: 37.62734106,
            code: "BCH176"
        
        },
        {
            title: "하평해변",
            num: 187,
            longitude: 128.8802,
            latitude: 37.82814,
            code: "BCH317"
        
        },
        {
            title: "사천 해수욕장",
            num: 188,
            longitude: 128.87,
            latitude: 37.85,
            code: "BCH224"
        
        },
        {
            title: "영진 해수욕장",
            num: 189,
            longitude: 128.8457533,
            latitude: 37.86900183,
            code: "BCH125"
        
        },
        {
            title: "연곡 해수욕장",
            num: 190,
            longitude: 128.8537136,
            latitude: 37.85925583,
            code: "BCH523"
        
        },
        {
            title: "상록해수욕장",
            num: 191,
            longitude: 126.507919,
            latitude: 35.605122,
            code: "BCH189"
        
        },
        {
            title: "강동몽돌해변",
            num: 192,
            longitude: 129.445343,
            latitude: 35.637974,
            code: "BCH516"
        
        },
        {
            title: "신명·정자해변",
            num: 193,
            longitude: 129.445343,
            latitude: 35.637974,
            code: "none"
        
        },
        {
            title: "나아해변",
            num: 194,
            longitude: 129.450211,
            latitude: 35.729679,
            code: "BCH132"
        
        },
        {
            title: "추암 해수욕장",
            num: 195,
            longitude: 129.160425,
            latitude: 37.47668055555556,
            code: "BCH128"
        
        },
        {
            title: "어달 해수욕장",
            num: 196,
            longitude: 129.11870833333333,
            latitude: 37.56803611111111,
            code: "BCH192"
        
        },
        {
            "num": 197 
        },
        {
            title: "망상 해수욕장",
            num: 198,
            longitude: 129.09089166666666,
            latitude: 37.59423888888889,
            code: "BCH023"
        
        },
        {
            title: "노봉 해수욕장",
            num: 199,
            longitude: 129.1021861111111,
            latitude: 37.58734166666667,
            code: "BCH009"
        
        },
        {
            title: "등대 해수욕장",
            num: 200,
            longitude: 128.59544722222222,
            latitude: 38.217022222222226,
            code: "BCH077"
        
        },
        {
            title: "속초 해수욕장",
            num: 201,
            longitude: 128.6055888888889,
            latitude: 38.18828055555555,
            code: "BCH095"
        
        },
        {
            title: "외옹치 해수욕장",
            num: 202,
            longitude: 128.60915555555556,
            latitude: 38.1834,
            code: "BCH507"
        
        },
        {
            title: "삼척 해수욕장",
            num: 203,
            longitude: 129.16896388888887,
            latitude: 37.46904444444445,
            code: "BCH148"
        
        },
        {
            title: "작은후진 해수욕장",
            num: 204,
            longitude: 129.17588333333333,
            latitude: 37.46403055555556,
            code: "BCH041"
        
        },
        {
            title: "증산 해수욕장",
            num: 205,
            longitude: 129.16206666666668,
            latitude: 37.47461666666667,
            code: "BCH255"
        
        },
        {
            title: "오분해변",
            num: 206,
            longitude: 129.1922,
            latitude: 37.42624166666666,
            code: "BCH515"
        
        },
        {
            title: "옥돌해수욕장",
            num: 207,
            longitude: 126.396164,
            latitude: 35.789223,
            code: "BCH028"
        
        },
        {
            title: "몽돌해수욕장/몽돌해변",
            num: 208,
            longitude: 126.396446,
            latitude: 35.835133,
            code: "BCH272"
        
        },
        {
            title: "신창 간이 해수욕장",
            num: 209,
            longitude: 129.516632,
            latitude: 35.91116,
            code: "none"
        
        },
        {
            title: "흥환간이해수욕장",
            num: 210,
            longitude: 129.521606,
            latitude: 36.00293,
            code: "BCH308"
        
        },
        {
            title: "송도해변(포항)",
            num: 211,
            longitude: 129.35379,
            latitude: 36.054741,
            code: "BCH252"
        
        },
        {
            title: "상맹방 해수욕장",
            num: 212,
            longitude: 129.21134166666667,
            latitude: 37.40367777777777,
            code: "none"
        
        },
        {
            title: "하맹방 해수욕장",
            num: 213,
            longitude: 129.22600277777778,
            latitude: 37.3945,
            code: "BCH194"
        
        },
        {
            title: "맹방 해수욕장",
            num: 214,
            longitude: 129.23309166666667,
            latitude: 37.389986111111114,
            code: "BCH108"
        
        },
        {
            title: "덕산 해수욕장",
            num: 215,
            longitude: 129.24146666666667,
            latitude: 37.386224999999996,
            code: "BCH030"
        
        },
        {
            title: "부남해변",
            num: 216,
            longitude: 129.2515611111111,
            latitude: 37.36187777777778,
            code: "BCH531"
        
        },
        {
            title: "궁촌 해수욕장",
            num: 217,
            longitude: 129.26862500000001,
            latitude: 37.32440833333334,
            code: "none"
        
        },
        {
            "num": 218 
        },
        {
            title: "문암 해수욕장",
            num: 219,
            longitude: 129.28914444444445,
            latitude: 37.309733333333334,
            code: "BCH513"
        
        },
        {
            title: "용화 해수욕장",
            num: 220,
            longitude: 129.3048611111111,
            latitude: 37.29007222222222,
            code: "none"
        
        },
        {
            title: "장호 해수욕장",
            num: 221,
            longitude: 129.31454722222225,
            latitude: 37.28585555555556,
            code: "BCH012"
        
        },
        {
            title: "거진1리 해수욕장",
            num: 222,
            longitude: 128.4653985,
            latitude: 38.4478949,
            code: "BCH012"
        
        },
        {
            title: "거진11리 해수욕장",
            num: 223,
            longitude: 128.45516666666666,
            latitude: 38.44203888888889,
            code: "BCH244"
        
        },
        {
            title: "대진1리 해수욕장",
            num: 224,
            longitude: 128.4249022,
            latitude: 38.50411751,
            code: "BCH010"
        
        },
        {
            title: "대진5리 해수욕장",
            num: 225,
            longitude: 128.4294011,
            latitude: 38.49626185,
            code: "BCH300"
        
        },
        {
            title: "화진포 해수욕장",
            num: 226,
            longitude: 128.43894,
            latitude: 38.47803,
            code: "BCH191"
        
        },
        {
            title: "초도리 해수욕장",
            num: 227,
            longitude: 128.42829,
            latitude: 38.49439,
            code: "BCH081"
        
        },
        {
            title: "반암리 해수욕장",
            num: 228,
            longitude: 128.46387777777775,
            latitude: 38.42268333333333,
            code: "BCH082"
        
        },
        {
            title: "마차진 해수욕장",
            num: 229,
            longitude: 128.41989444444442,
            latitude: 38.510930555555554,
            code: "BCH225"
        
        },
        {
            title: "명파 해수욕장",
            num: 230,
            longitude: 128.40559722222224,
            latitude: 38.543502777777775,
            code: "BCH223"
        
        },
        {
            title: "송지호 해수욕장",
            num: 231,
            longitude: 128.52788611111112,
            latitude: 38.32993333333334,
            code: "BCH315"
        
        },
        {
            title: "봉수대 해수욕장",
            num: 232,
            longitude: 128.52831944444446,
            latitude: 38.32090555555556,
            code: "none"
        
        },
        {
            title: "가진리 해수욕장",
            num: 233,
            longitude: 128.50975277777778,
            latitude: 38.37276388888889,
            code: "BCH213"
        
        },
        {
            title: "공현1리 해수욕장",
            num: 234,
            longitude: 128.5085337,
            latitude: 38.35858298,
            code: "BCH133"
        
        },
        {
            title: "공현2리 해수욕장",
            num: 235,
            longitude: 128.5112024,
            latitude: 38.35047742,
            code: "none"
        
        },
        {
            title: "삼포 해수욕장",
            num: 236,
            longitude: 128.5350551,
            latitude: 38.3153605,
            code: "none"
        
        },
        {
            title: "삼포2리 해수욕장",
            num: 237,
            longitude: 128.5316005,
            latitude: 38.31854047,
            code: "none"
        
        },
        {
            title: "백도 해수욕장",
            num: 238,
            longitude: 128.54631944444444,
            latitude: 38.30125555555555,
            code: "BCH518"
        
        },
        {
            title: "문암2리해변",
            num: 239,
            longitude: 128.54939,
            latitude: 38.29676,
            code: "BCH303"
        
        },
        {
            title: "자작도 해수욕장",
            num: 240,
            longitude: 128.5476381,
            latitude: 38.29735916,
            code: "BCH054"
        
        },
        {
            title: "천진 해수욕장",
            num: 241,
            longitude: 128.56039166666667,
            latitude: 38.257641666666665,
            code: "none"
        
        },
        {
            title: "청간 해수욕장",
            num: 242,
            longitude: 128.55663611111112,
            latitude: 38.268188888888886,
            code: "BCH019"
        
        },
        {
            title: "아야진 해수욕장",
            num: 243,
            longitude: 128.5534138888889,
            latitude: 38.27593888888889,
            code: "BCH228"
        
        },
        {
            title: "교암리 해수욕장",
            num: 244,
            longitude: 128.54706388888889,
            latitude: 38.29091388888889,
            code: "BCH061"
        
        },
        {
            title: "봉포 해수욕장",
            num: 245,
            longitude: 128.56379166666667,
            latitude: 38.25403611111111,
            code: "none"
        
        },
        {
            "num": 246 
        },
        {
            title: "오산 해수욕장",
            num: 247,
            longitude: 128.66411944444445,
            latitude: 38.09115833333333,
            code: "BCH307"
        
        },
        {
            title: "잔교리 해수욕장",
            num: 248,
            longitude: 128.74373333333332,
            latitude: 37.992986111111115,
            code: "BCH273"
        
        },
        {
            title: "하조대 해수욕장",
            num: 249,
            longitude: 128.7262611111111,
            latitude: 38.02301666666666,
            code: "BCH099"
        
        },
        {
            title: "죽도 해수욕장",
            num: 250,
            longitude: 128.76007222222222,
            latitude: 37.97443888888889,
            code: "BCH202"
        
        },
        {
            title: "갯마을 해수욕장",
            num: 251,
            longitude: 128.77851944444447,
            latitude: 37.94982777777778,
            code: "BCH011"
        
        },
        {
            title: "인구 해수욕장",
            num: 252,
            longitude: 128.76390833333335,
            latitude: 37.968944444444446,
            code: "BCH127"
        
        },
        {
            title: "동산 해수욕장",
            num: 253,
            longitude: 128.75884722222222,
            latitude: 37.98164166666667,
            code: "BCH341"
        
        },
        {
            title: "동산포구 해수욕장",
            num: 254,
            longitude: 128.75847777777778,
            latitude: 37.981683333333336,
            code: "BCH136"
        
        },
        {
            title: "광진리 해수욕장",
            num: 255,
            longitude: 128.7646638888889,
            latitude: 37.96477777777778,
            code: "none"
        
        },
        {
            title: "원포리 해수욕장",
            num: 256,
            longitude: 128.79236111111112,
            latitude: 37.93042222222222,
            code: "none"
        
        },
        {
            title: "지경 해수욕장",
            num: 257,
            longitude: 128.80333611111112,
            latitude: 37.922675,
            code: "BCH143"
        
        },
        {
            title: "남애1리 해수욕장",
            num: 258,
            longitude: 128.77271666666667,
            latitude: 37.95490277777778,
            code: "BCH263"
        
        },
        {
            title: "남애3리 해수욕장",
            num: 259,
            longitude: 128.78464444444444,
            latitude: 37.94564999999999,
            code: "BCH186"
        
        },
        {
            title: "물치 해수욕장",
            num: 260,
            longitude: 128.60817,
            latitude: 38.1526,
            code: "BCH131"
        
        },
        {
            title: "정암 해수욕장",
            num: 261,
            longitude: 128.61647222222223,
            latitude: 38.138355555555556,
            code: "BCH520"
        
        },
        {
            title: "낙산 해수욕장",
            num: 262,
            longitude: 128.63401,
            latitude: 38.11677,
            code: "BCH205"
        
        },
        {
            title: "설악 해수욕장",
            num: 263,
            longitude: 128.62362222222222,
            latitude: 38.130091666666665,
            code: "BCH056"
        
        },
        {
            title: "사천진 해수욕장",
            num: 264,
            longitude: 128.87438055555558,
            latitude: 37.842172222222224,
            code: "BCH135"
        
        },
        {
            title: "켄싱턴리조트 해수욕장",
            num: 265,
            longitude: 128.57345555555554,
            latitude: 38.24288333333333,
            code: "BCH208"
        
        },
        {
            title: "송지호오토캠핑 해수욕장",
            num: 266,
            longitude: 128.51573,
            latitude: 38.34252,
            code: "none"
        
        },
        {
            title: "기사문 해수욕장",
            num: 267,
            longitude: 128.73170277777777,
            latitude: 38.00551388888889,
            code: "BCH044"
        
        },
        {
            title: "송도 해수욕장(부산)",
            num: 268,
            longitude: 129.02,
            latitude: 35.08,
            code: "BCH129"
        
        },
        {
            title: "구룡포 해수욕장",
            num: 269,
            longitude: 129.56625833333334,
            latitude: 35.99679444444445,
            code: "BCH219"
        
        },
        {
            title: "도구 해수욕장",
            num: 270,
            longitude: 129.44292777777778,
            latitude: 35.992666666666665,
            code: "none"
        
        },
        {
            title: "영일대 해수욕장",
            num: 271,
            longitude: 129.37750833333334,
            latitude: 36.05403611111111,
            code: "BCH070"
        
        },
        {
            title: "칠포 해수욕장",
            num: 272,
            longitude: 129.40029166666667,
            latitude: 36.132327777777775,
            code: "BCH167"
        
        },
        {
            title: "월포 해수욕장",
            num: 273,
            longitude: 129.3714138888889,
            latitude: 36.20332777777778,
            code: "BCH504"
        
        },
        {
            title: "화진 해수욕장",
            num: 274,
            longitude: 129.3734138888889,
            latitude: 36.25324722222222,
            code: "BCH155"
        
        },
        {
            title: "갈목해변",
            num: 275,
            longitude: 126.625191,
            latitude: 36.063602,
            code: "BCH109"
        
        },
        {
            title: "용한1리해수욕장",
            num: 276,
            longitude: 129.412994,
            latitude: 36.098705,
            code: "none"
        
        },
        {
            title: "전촌솔밭해변",
            num: 277,
            longitude: 129.49152222222222,
            latitude: 35.787052777777774,
            code: "none"
        
        },
        {
            title: "나정고운모래해변",
            num: 278,
            longitude: 129.49181944444445,
            latitude: 35.78390833333333,
            code: "BCH140"
        
        },
        {
            title: "오류고아라해변",
            num: 279,
            longitude: 129.50959166666667,
            latitude: 35.82243611111112,
            code: "BCH183"
        
        },
        {
            title: "봉길대왕암해변",
            num: 280,
            longitude: 129.48446388888888,
            latitude: 35.73929166666667,
            code: "none"
        
        },
        {
            title: "관성솔밭해변",
            num: 281,
            longitude: 129.45230555555554,
            latitude: 35.660199999999996,
            code: "BCH271"
        
        },
        {
            title: "남호 해수욕장",
            num: 282,
            longitude: 129.38137777777777,
            latitude: 36.327088888888895,
            code: "BCH067"
        
        },
        {
            title: "오보 해수욕장",
            num: 283,
            longitude: 129.43287777777778,
            latitude: 36.440730555555554,
            code: "BCH275"
        
        },
        {
            title: "장사 해수욕장",
            num: 284,
            longitude: 129.37601111111113,
            latitude: 36.283202777777774,
            code: "BCH270"
        
        },
        {
            title: "경정 해수욕장",
            num: 285,
            longitude: 129.43296944444444,
            latitude: 36.48093333333333,
            code: "BCH230"
        
        },
        {
            "num": 286 
        },
        {
            title: "하저리 해수욕장",
            num: 287,
            longitude: 129.4095027777778,
            latitude: 36.3898,
            code: "none"
        
        },
        {
            title: "고래불 해수욕장",
            num: 288,
            longitude: 129.41274444444446,
            latitude: 36.59880833333334,
            code: "BCH203"
        
        },
        {
            title: "나곡 해수욕장",
            num: 289,
            longitude: 129.37151111111112,
            latitude: 37.126225,
            code: "BCH503"
        
        },
        {
            title: "망양정 해수욕장",
            num: 290,
            longitude: 129.41404722222222,
            latitude: 36.96717777777778,
            code: "none"
        
        },
        {
            title: "기성망양 해수욕장",
            num: 291,
            longitude: 129.43466666666666,
            latitude: 36.84305833333334,
            code: "none"
        
        },
        {
            title: "구산 해수욕장",
            num: 292,
            longitude: 129.46807777777778,
            latitude: 36.752225,
            code: "none"
        
        },
        {
            title: "봉평 해수욕장",
            num: 293,
            longitude: 129.41327777777778,
            latitude: 37.044105555555554,
            code: "BCH153"
        
        },
        {
            title: "후정 해수욕장",
            num: 294,
            longitude: 129.41365277777777,
            latitude: 37.07212777777778,
            code: "BCH060"
        
        },
        {
            title: "비인해수욕장",
            num: 295,
            longitude: 126.568764,
            latitude: 36.10989,
            code: "none"
        
        },
        {
            title: "띠섬목해변",
            num: 296,
            longitude: 126.569168,
            latitude: 36.155842,
            code: "BCH196"
        
        },
        {
            title: "오도1리해수욕장",
            num: 297,
            longitude: 129.415421,
            latitude: 36.144611,
            code: "BCH502"
        
        },
        {
            title: "조사리간이해수욕장",
            num: 298,
            longitude: 129.363342,
            latitude: 36.238396,
            code: "none"
        
        },
        {
            title: "오포해수욕장",
            num: 299,
            longitude: 129.370529,
            latitude: 36.376194,
            code: "BCH236"
        
        },
        {
            title: "사창해수욕장",
            num: 300,
            longitude: 126.399841,
            latitude: 36.386517,
            code: "BCH157"
        
        },
        {
            title: "운여해변",
            num: 301,
            longitude: 126.342964,
            latitude: 36.432716,
            code: "BCH121"
        
        },
        {
            title: "두에기해변",
            num: 302,
            longitude: 126.34346,
            latitude: 36.524704,
            code: "BCH026"
        
        },
        {
            title: "덕천해수욕장",
            num: 303,
            longitude: 129.437393,
            latitude: 36.558044,
            code: "none"
        
        },
        {
            title: "해운대 해수욕장",
            num: 304,
            longitude: 129.16168611111112,
            latitude: 35.158852777777774,
            code: "BCH045"
        
        },
        {
            "num": 305 
        },
        {
            title: "광안리 해수욕장",
            num: 306,
            longitude: 129.11940555555557,
            latitude: 35.153555555555556,
            code: "none"
        
        },
        {
            title: "임랑 해수욕장",
            num: 307,
            longitude: 129.26437777777778,
            latitude: 35.318538888888895,
            code: "BCH063"
        
        },
        {
            title: "다대포 해수욕장",
            num: 308,
            longitude: 128.96575833333333,
            latitude: 35.046077777777775,
            code: "BCH032"
        
        },
        {
            title: "일광 해수욕장",
            num: 309,
            longitude: 129.23353055555555,
            latitude: 35.27,
            code: "none"
        
        },
        {
            title: "영리해수욕장",
            num: 310,
            longitude: 129.382599,
            latitude: 36.605968,
            code: "BCH265"
        
        },
        {
            title: "일산 해수욕장",
            num: 311,
            longitude: 129.43099999999998,
            latitude: 35.49559166666667,
            code: "BCH331"
        
        },
        {
            title: "원안해수욕장",
            num: 312,
            longitude: 126.22963,
            latitude: 36.709076,
            code: "BCH022"
        
        },
        {
            title: "진하 해수욕장",
            num: 313,
            longitude: 129.34582222222224,
            latitude: 35.38356388888889,
            code: "BCH204"
        
        },
        {
            title: "비진도 해수욕장",
            num: 314,
            longitude: 128.46019166666665,
            latitude: 34.71975555555556,
            code: "BCH116"
        
        },
        {
            title: "덕포 해수욕장",
            num: 315,
            longitude: 128.71259166666667,
            latitude: 34.91258333333333,
            code: "BCH008"
        
        },
        {
            title: "와현모래숲해변",
            num: 316,
            longitude: 128.70583888888888,
            latitude: 34.81268333333333,
            code: "BCH068"
        
        },
        {
            title: "흥남 해수욕장",
            num: 317,
            longitude: 128.71505,
            latitude: 34.960061111111116,
            code: "BCH172"
        
        },
        {
            title: "음포해수욕장",
            num: 318,
            longitude: 126.287651,
            latitude: 36.847019,
            code: "none"
        
        },
        {
            title: "황포 해수욕장",
            num: 319,
            longitude: 128.6762472222222,
            latitude: 35.02112777777778,
            code: "BCH096"
        
        },
        {
            title: "농소몽돌 해수욕장",
            num: 320,
            longitude: 128.69521944444446,
            latitude: 35.0068,
            code: "BCH346"
        
        },
        {
            title: "구조라 해수욕장",
            num: 321,
            longitude: 128.69088333333335,
            latitude: 34.808305555555556,
            code: "BCH146"
        
        },
        {
            title: "학동흑진주몽돌해변",
            num: 322,
            longitude: 128.64050555555554,
            latitude: 34.77328611111111,
            code: "BCH111"
        
        },
        {
            title: "명사 해수욕장",
            num: 323,
            longitude: 128.60385277777777,
            latitude: 34.726144444444444,
            code: "BCH351"
        
        },
        {
            title: "함목 해수욕장",
            num: 324,
            longitude: 128.65267500000002,
            latitude: 34.73921388888889,
            code: "BCH326"
        
        },
        {
            title: "여차몽돌 해수욕장",
            num: 325,
            longitude: 128.626375,
            latitude: 34.71350833333334,
            code: "BCH198"
        
        },
        {
            title: "설리 해수욕장",
            num: 326,
            longitude: 128.026,
            latitude: 34.71,
            code: "BCH047"
        
        },
        {
            title: "상주은모래비치",
            num: 327,
            longitude: 127.98820555555555,
            latitude: 34.72031388888889,
            code: "BCH257"
        
        },
        {
            title: "먼동해수욕장",
            num: 328,
            longitude: 126.172714,
            latitude: 36.893326,
            code: "BCH501"
        
        },
        {
            title: "송정솔바람해변",
            num: 329,
            longitude: 128.02314444444445,
            latitude: 34.721183333333336,
            code: "BCH074"
        
        },
        {
            title: "두곡.월포 해수욕장",
            num: 330,
            longitude: 127.90732777777778,
            latitude: 34.76774722222222,
            code: "BCH170"
        
        },
        {
            title: "사촌 해수욕장",
            num: 331,
            longitude: 127.85549444444443,
            latitude: 34.741686111111115,
            code: "BCH511"
        
        },
        {
            title: "남일대 해수욕장",
            num: 332,
            longitude: 128.09666111111113,
            latitude: 34.926205555555555,
            code: "none"
        
        },
        {
            title: "덕동 해수욕장",
            num: 333,
            longitude: 128.23739166666667,
            latitude: 34.63542777777778,
            code: "BCH050"
        
        },
        {
            title: "수륙 해수욕장",
            num: 334,
            longitude: 128.44,
            latitude: 34.823800000000006,
            code: "BCH107"
        
        },
        {
            title: "사목해수욕장",
            num: 335,
            longitude: 126.288071,
            latitude: 36.939106,
            code: "BCH352"
        
        },
        {
            title: "황금산몽돌해변",
            num: 336,
            longitude: 126.345932,
            latitude: 36.984974,
            code: "none"
        
        },
        {
            title: "봉암몽돌 해수욕장",
            num: 337,
            longitude: 128.51143055555556,
            latitude: 34.759880555555554,
            code: "BCH526"
        
        },
        {
            title: "하트해변",
            num: 338,
            longitude: 129.406967,
            latitude: 37.065926,
            code: "none"
        
        },
        {
            title: "월천해변",
            num: 339,
            longitude: 129.354126,
            latitude: 37.159927,
            code: "BCH328"
        
        },
        {
            title: "물안(옆개) 해수욕장",
            num: 340,
            longitude: 128.6532,
            latitude: 35.01114722222222,
            code: "BCH051"
        
        },
        {
            title: "덕원 해수욕장",
            num: 341,
            longitude: 128.57549166666666,
            latitude: 34.77883055555556,
            code: "none"
        
        },
        {
            title: "표선해비치",
            num: 342,
            longitude: 126.84339999999999,
            latitude: 33.327275,
            code: "BCH115"
        
        },
        {
            title: "화순금모래 해수욕장",
            num: 343,
            longitude: 126.31920277777778,
            latitude: 33.23623888888889,
            code: "BCH301"
        
        },
        {
            title: "신양섭지코지 해수욕장",
            num: 344,
            longitude: 126.9237638888889,
            latitude: 33.43462222222222,
            code: "BCH112"
        
        },
        {
            title: "곽지과물 해수욕장",
            num: 345,
            longitude: 126.30459722222221,
            latitude: 33.45064722222222,
            code: "BCH220"
        
        },
        {
            title: "협재 해수욕장",
            num: 346,
            longitude: 126.23996666666667,
            latitude: 33.39445833333333,
            code: "BCH017"
        
        },
        {
            title: "중문ㆍ색달 해수욕장",
            num: 347,
            longitude: 126.41160833333333,
            latitude: 33.244794444444445,
            code: "BCH145"
        
        },
        {
            title: "이호테우 해수욕장",
            num: 348,
            longitude: 126.45268611111112,
            latitude: 33.49799166666667,
            code: "BCH122"
        
        },
        {
            title: "삼양검은모래 해수욕장",
            num: 349,
            longitude: 126.58600277777778,
            latitude: 33.525725,
            code: "BCH319"
        
        },
        {
            title: "임원해변",
            num: 350,
            longitude: 129.356552,
            latitude: 37.205963,
            code: "none"
        
        },
        {
            title: "노가리해수욕장",
            num: 351,
            longitude: 126.463242,
            latitude: 37.260925,
            code: "BCH217"
        
        },
        {
            title: "함덕서우봉 해수욕장",
            num: 352,
            longitude: 126.66944722222223,
            latitude: 33.543441666666666,
            code: "BCH509"
        
        },
        {
            title: "하고수동 해수욕장",
            num: 353,
            longitude: 126.95856111111111,
            latitude: 33.51330277777778,
            code: "none"
        
        },
        {
            title: "김녕성세기 해수욕장",
            num: 354,
            longitude: 126.75972777777778,
            latitude: 33.557988888888886,
            code: "none"
        
        },
        {
            title: "금능으뜸원 해수욕장",
            num: 355,
            longitude: 126.23517777777778,
            latitude: 33.38990833333333,
            code: "BCH006"
        
        },
        {
            title: "낭하리해변",
            num: 356,
            longitude: 126.521141,
            latitude: 37.260643,
            code: "BCH233"
        
        },
        {
            title: "하도 해수욕장",
            num: 357,
            longitude: 126.89873333333334,
            latitude: 33.512905555555555,
            code: "BCH055"
        
        },
        {
            title: "용담리해변",
            num: 358,
            longitude: 126.463242,
            latitude: 37.260925,
            code: "BCH076"
        
        },
        {
            title: "신남해변",
            num: 359,
            longitude: 129.301132,
            latitude: 37.253918,
            code: "none"
        
        },
        {
            title: "사량 대항 해수욕장",
            num: 360,
            longitude: 128.213,
            latitude: 34.8508,
            code: "BCH100"
        
        },
        {
            title: "덕적도 능동자갈마당",
            num: 361,
            longitude: 126.115814,
            latitude: 37.261925,
            code: "none"
        
        },
        {
            title: "구봉솔숲해수욕장",
            num: 362,
            longitude: 126.521141,
            latitude: 37.260643,
            code: "BCH258"
        
        },
        {
            title: "후포 해수욕장",
            num: 363,
            longitude: 129.44218333333333,
            latitude: 36.67583055555556,
            code: "none"
        
        },
        {
            title: "소청예동 해수욕장",
            num: 364,
            longitude: 124.72,
            latitude: 37.77,
            code: "BCH532"
        
        },
        {
            title: "사곶 해수욕장",
            num: 365,
            longitude: 124.71,
            latitude: 37.95,
            code: "BCH075"
        
        },
        {
            title: "구리동 해수욕장",
            num: 366,
            longitude: 125.69814444444445,
            latitude: 37.67105833333333,
            code: "none"
        
        },
        {
            title: "실미 해수욕장",
            num: 367,
            longitude: 126.4,
            latitude: 37.4,
            code: "BCH241"
        
        },
        {
            title: "황성금리 해수욕장",
            num: 368,
            longitude: 126.06,
            latitude: 34.53,
            code: "BCH036"
        
        },
        {
            title: "추포 해수욕장",
            num: 369,
            longitude: 126.067975,
            latitude: 34.8014527777778,
            code: "BCH072"
        
        },
        {
            title: "신도 해수욕장",
            num: 370,
            longitude: 125.97,
            latitude: 34.58,
            code: "BCH102"
        
        },
        {
            title: "배낭기미 해수욕장",
            num: 371,
            longitude: 125.43,
            latitude: 34.69,
            code: "BCH327"
        
        },
        {
            title: "홍도 해수욕장",
            num: 372,
            longitude: 125.19,
            latitude: 34.69,
            code: "BCH337"
        
        },
        {
            title: "낭도 해수욕장",
            num: 373,
            longitude: 127.54,
            latitude: 34.6,
            code: "BCH232"
        
        },
        {
            title: "정강 해수욕장",
            num: 374,
            longitude: 127.24,
            latitude: 34.22,
            code: "BCH306"
        
        },
        {
            title: "대풍 해수욕장",
            num: 375,
            longitude: 127.24,
            latitude: 34.24,
            code: "BCH221"
        
        },
        {
            title: "구시포 해수욕장",
            num: 376,
            longitude: 126.43,
            latitude: 35.44513055555555,
            code: "BCH262"
        
        },
        {
            title: "하효쇠소깍 해수욕장",
            num: 377,
            longitude: 126.62389444444443,
            latitude: 33.252491666666664,
            code: "BCH345"
        
        },
        {
            title: "종달 해수욕장",
            num: 378,
            longitude: 126.91323333333334,
            latitude: 33.496161111111114,
            code: "BCH018"
        
        },
        {
            title: "서빈백사 해수욕장",
            num: 379,
            longitude: 126.94493333333334,
            latitude: 33.50235555555555,
            code: "BCH212"
        
        },
        {
            title: "추자모진이 해수욕장",
            num: 380,
            longitude: 126.33491944444444,
            latitude: 33.945611111111106,
            code: "BCH027"
        
        },
        {
            title: "밤섬 해수욕장",
            num: 381,
            longitude: 126.36,
            latitude: 36.33,
            code: "BCH276"
        
        },
        {
            title: "몽돌해수욕장 (옹진군)",
            num: 382,
            longitude: 126.463242,
            latitude: 37.260925,
            code: "BCH029"
        
        },
        {
            title: "방아머리해수욕장",
            num: 383,
            longitude: 126.579468,
            latitude: 37.306412,
            code: "BCH149"
        
        },
        {
            title: "당너머 해수욕장",
            num: 384,
            longitude: 126.35,
            latitude: 36.35,
            code: "BCH334"
        
        },
        {
            title: "호도 해수욕장",
            num: 385,
            longitude: 126.27,
            latitude: 36.3,
            code: "BCH166"
        
        },
        {
            title: "초곡해수욕장",
            num: 386,
            longitude: 129.303513,
            latitude: 37.299969,
            code: "BCH007"
        
        },
        {
            title: "곰섬 해수욕장",
            num: 387,
            longitude: 126.29155277777778,
            latitude: 36.58751111111111,
            code: "BCH237"
        
        },
        {
            title: "백리포(방주골) 해수욕장",
            num: 388,
            longitude: 126.1545638888889,
            latitude: 36.81108888888889,
            code: "none"
        
        },
        {
            title: "사곡 해수욕장",
            num: 389,
            longitude: 128.57,
            latitude: 34.9,
            code: "none"
        
        },
        {
            title: "구영 해수욕장",
            num: 390,
            longitude: 128.69,
            latitude: 35.03,
            code: "BCH130"
        
        },
        {
            title: "망치해변 해수욕장",
            num: 391,
            longitude: 128.67,
            latitude: 34.81,
            code: "none"
        
        },
        {
            "num": 392 
        },
        {
            title: "한재밑해변",
            num: 393,
            longitude: 129.192352,
            latitude: 37.395821,
            code: "none"
        
        },
        {
            title: "거잠포해변",
            num: 394,
            longitude: 126.406219,
            latitude: 37.399452,
            code: "BCH053"
        
        },
        {
            title: "용유도 마시안해변",
            num: 395,
            longitude: 126.406509,
            latitude: 37.445557,
            code: "BCH332"
        
        },
        {
            title: "선녀바위해수욕장",
            num: 396,
            longitude: 126.406509,
            latitude: 37.445557,
            code: "BCH312"
        
        },
        {
            title: "용유도해변",
            num: 397,
            longitude: 126.406509,
            latitude: 37.445557,
            code: "BCH530"
        
        },
        {
            title: "왜목마을 해수욕장",
            num: 398,
            longitude: 126.53,
            latitude: 37.04,
            code: "BCH147"
        
        },
        {
            title: "감추해변",
            num: 399,
            longitude: 129.138916,
            latitude: 37.48978,
            code: "BCH024"
        
        },
        {
            title: "한섬해변&한섬감성바닷길",
            num: 400,
            longitude: 129.14119,
            latitude: 37.535858,
            code: "BCH182"
        
        },
        {
            title: "고불개해변",
            num: 401,
            longitude: 129.14119,
            latitude: 37.535858,
            code: "BCH042"
        
        },
        {
            title: "하평해변(동해)",
            num: 402,
            longitude: 129.14119,
            latitude: 37.535858,
            code: "BCH001"
        
        },
        {
            title: "염전해변",
            num: 403,
            longitude: 128.975494,
            latitude: 37.725513,
            code: "none"
        
        },
        {
            title: "북분리 해수욕장",
            num: 404,
            longitude: 128.748896,
            latitude: 37.988155,
            code: "BCH020"
        
        },
        {
            title: "순포해변",
            num: 405,
            longitude: 128.863083,
            latitude: 37.821095,
            code: "BCH508"
        
        },
        {
            title: "대청도 농여해변",
            num: 406,
            longitude: 124.714096,
            latitude: 37.853374,
            code: "BCH231"
        
        },
        {
            title: "소돌해수욕장",
            num: 407,
            longitude: 128.808792,
            latitude: 37.914974,
            code: "BCH304"
        
        },
        {
            title: "고파도 해수욕장",
            num: 408,
            longitude: 126.34,
            latitude: 36.91,
            code: "BCH278"
        
        },
        {
            title: "광암 해수욕장",
            num: 409,
            longitude: 128.5,
            latitude: 35.1,
            code: "BCH046"
        
        },
        {
            title: "청시행비치",
            num: 410,
            longitude: 128.808792,
            latitude: 37.914974,
            code: "BCH080"
        
        },
        {
            title: "웅천 해수욕장",
            num: 411,
            longitude: 127.67,
            latitude: 34.74,
            code: "BCH103"
        
        },
        {
            title: "중광정해변",
            num: 412,
            longitude: 128.717989,
            latitude: 38.028446,
            code: "none"
        
        },
        {
            title: "화진포콘도 해수욕장",
            num: 413,
            longitude: 128.4409,
            latitude: 38.47531,
            code: "none"
        
        },
        {
            title: "서도 해수욕장",
            num: 414,
            longitude: 127.29,
            latitude: 34.05,
            code: "BCH240"
        
        },
        {
            title: "설레미 해수욕장",
            num: 415,
            longitude: 126.14,
            latitude: 34.96,
            code: "BCH184"
        
        },
        {
            title: "짱뚱어 해수욕장",
            num: 416,
            longitude: 126.13,
            latitude: 34.99,
            code: "BCH159"
        
        },
        {
            title: "향호해수욕장",
            num: 417,
            longitude: 128.808792,
            latitude: 37.914974,
            code: "BCH162"
        
        },
        {
            title: "백령도 콩돌해변",
            num: 418,
            longitude: 124.713158,
            latitude: 37.899521,
            code: "BCH178"
        
        },
        {
            title: "애견전용해수욕장 멍비치",
            num: 419,
            longitude: 128.752335,
            latitude: 37.962708,
            code: "none"
        
        },
        {
            title: "38해변",
            num: 420,
            longitude: 128.754349,
            latitude: 38.008842,
            code: "none"
        
        }
    ]
    return beachdata;
}