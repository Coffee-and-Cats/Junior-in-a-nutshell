package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./pages"))
	http.Handle("/", fs)

	log.Println("Servidor funcionando! Porta :5000...")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
