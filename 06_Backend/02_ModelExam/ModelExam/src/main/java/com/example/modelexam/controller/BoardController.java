package com.example.modelexam.controller.quiz;

import com.example.modelexam.model.Board;
import com.example.modelexam.service.quiz.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.quiz
 * fileName : Board07Controller
 * author : GGG
 * date : 2023-10-11
 * description : @RestController + react 연동(vue 등)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/quiz")
public class BoardController {

    //  todo: 객체 가져오기
    @Autowired
    BoardService boardService;

    /**
     * 전체 조회 함수
     */
    @GetMapping("/board")
    public ResponseEntity<Object> getBoardAll() {
        try {
            List<Board> list = boardService.findAll();
            if(list.isEmpty() == false) {
//              todo: 조회 성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//              todo: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
//          todo: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상세 조회(1건 조회)
     */
    @GetMapping("/board/{id}")
    public ResponseEntity<Object> getBoardId(
            @PathVariable int id
    ){
        try {
            Optional<Board> optionalBoard = boardService.findById(id);
            if(optionalBoard.isEmpty() == false) {
//              todo: 조회 성공
                return new ResponseEntity<>(optionalBoard.get(), HttpStatus.OK);
            } else {
//              todo: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
//          todo: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 저장 함수
     */
    @PostMapping("/board")
    public ResponseEntity<Object> createBoard(
            @RequestBody Board board) {
        try {
            List<Board> list = boardService.save(board);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
//          todo: INTERNAL_SERVER_ERROR(500) : sql 구문 에러 등
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * 수정 함수
     */
    @PutMapping("/board/edit/{id}")
    public ResponseEntity<Object> updateBoard(
            @PathVariable int id,
            @RequestBody Board board
    ){
        try {
            List<Board> list = boardService.save(board);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 삭제 함수
     */
    @DeleteMapping("/board/delete/{id}")
    public ResponseEntity<Object> deleteBoard(
            @PathVariable int id
    ) {
        try {
            boolean bSuccess = boardService.removeById(id);
            if(bSuccess == true) {
//              todo: 삭제 성공
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
//              todo: 0건 삭제 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
//          todo: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}







