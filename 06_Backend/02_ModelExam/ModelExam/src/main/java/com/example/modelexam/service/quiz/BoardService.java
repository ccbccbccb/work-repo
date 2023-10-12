package com.example.modelexam.service.quiz;

import com.example.modelexam.dao.BoardDao;
import com.example.modelexam.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.service.exam01
 * fileName : BoardService
 * author : GGG
 * date : 2023-10-06
 * description : 부서 업무 서비스 클래스, @Service, @Autowired,
 *               findAll()
 * 요약 :
 *     @Service : 업무 로직 담당 클래스위에 붙이는 어노테이션
 *      => 스프링 서버 가동될때 그 클래스 생성해둠(싱글톤)
 *      => 객체를 만들어서 함수를 쓸때 : new 생성자함수() 하는데
 *      => 스프링에서는 하지 않고 미리 만들어 둔 객체를 받아서 사용함
 *      (참고: IOC: 제어의 역전)
 *      기타 : @Repository , @Component 등
 *     @Autowired : 스프링에서 미리 만들어 둔 객체를 가져오기
 *       사용법 : 변수위에 또는 생성자함수 위에 붙이는 가져올 수 있음
 *      (참고: DI : 의존성 주입)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-06         GGG          최초 생성
 */
@Service
public class BoardService {

    @Autowired
    BoardDao boardDao; // 가짜 DB에 접근하는 객체

    /**
     * 전체 조회 함수 : selectAll()(DAO 객체 함수) 호출
     * @return
     */
    public List<Board> findAll() {
//      TODO: boardDao.selectAll() : db 조회 함수 호출
        List<Board> list = boardDao.selectAll();

        return list;
    }

    /**
     * id(기본키)로 조회 : 상세조회(1건조회)
     * @param id
     * @return
     */
    public Optional<Board> findById(int id) {
//       todo: db 상세조회(1건조회) 함수 호출
//          id(기본키)로 조회
        Board board = boardDao.selectById(id);
//      todo : null 방지 클래스 사용
        Optional<Board> optionalBoard = Optional.ofNullable(board);

        return optionalBoard;
    }

    /**
     * 부서 정보 저장 함수
     * @param board
     * @return
     */
    public List<Board> save(Board board) {

        List<Board> list = null;
//      todo: insert 시 Id 자동 생성
//        기존 부서번호 max 찾아서 + 10
        if(board.getId() == null) {
//            todo: 전체조회해서 현재 배열의 크기 가져오기
            int count = boardDao.selectAll().size();
//            todo: 새로운 부서번호 생성
            int newId = (count + 1);
//            todo: 새로운 부서번호 저장 : board
            board.setId(newId);
//            todo: db 저장
            list = boardDao.insert(board);
        } else {
//           todo: db 수정
            list = boardDao.update(board);
        }

        return list;
    }

    /**
     * 부서번호로 삭제하는 함수
     * @param id
     * @return
     */
    public boolean removeById(int id) {
//        삭제 함수 호출 : 리턴값 : (삭제된 건수)
        int iCount = boardDao.deleteById(id);

        return (iCount > 0)? true : false;
    }
}