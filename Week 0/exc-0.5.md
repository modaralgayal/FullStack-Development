```mermaid

sequenceDiagram
    participant Server
    participant Browser

    Browser->>Server: POST https://fullstack-exampleApp.herokuapp.com/new_note_spa
    Server->>Browser: JSON file (contents and timestamps included)


```