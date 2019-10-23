let centerId = 1

const state = {
  centers: [
    { id: centerId++, name: 'RH휘트니스', address: '서울시 용산구', grade: 5 },
    {
      id: centerId++,
      name: '한창헬스크럽',
      address: '경기도 시흥시 은행동',
      grade: 4.5,
      imgs: [
        'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/samara/facilities/fitness-spa/gym/181126-1-2000-fac-LTSM.jpg.thumb.1440.1440.jpg',
        'https://img.sbs.co.kr/newimg/news/20160829/200974474_700.jpg',
        'http://mansoospa.co.kr/app/dubu_sourcecode/docs/imgs/1506924443_DSC02884.JPG'
      ],
      reviews: [
        {
          writer: 'fasdfasd',
          contents: '헬스장 너무 좋다',
          grade: 5
        },
        {
          writer: 'fasdfa',
          contents: '좋지만 기구가 많이 없다.',
          grade: 4.7
        }
      ]
    },
    {
      id: centerId++,
      name: '코리아헬스',
      address: '경기도 시흥시 신천동',
      grade: 2.4,
      imgs: []
    },
    {
      id: centerId++,
      name: '베스트휘트니스클럽',
      address: '경기도 부천시 소사구',
      grade: 3.7,
      imgs: []
    },
    {
      id: centerId++,
      name: '비타민휘트니스',
      address: '경기도 부천시 소사구',
      grade: 4.7,
      imgs: []
    },
    {
      id: centerId++,
      name: '새마을휘트니스 부천점',
      address: '경기도 부천시 소사구',
      grade: 1.7,
      imgs: []
    }
  ]
}

const mutations = {}

const actions = {
  FETCH_FIT_CENTERS: context => {
    return new Promise(resolve => {
      resolve(context.state.centers)
    })
  },
  SEARCH_FIT_CENTERS: (context, region) => {}
}

export default {
  state,
  mutations,
  actions
}
