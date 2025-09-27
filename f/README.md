# Responsive Layout

* used previos further inside divs and used flex and gred for responsiveness

### * started from layout created three div

* one who contain header( the header is absolute)
* one for content
* one for footer(did not created yet)
* above two are inside the a container which is main

### Header

* header have position absolute

### HOME

* home have main-container who cover up the whole display
  * first div inside is for header-backside (used also div technique here with null div)
  * second div is .chat-heading-container used to show the heading
  * third is for content which has flex : 1
    ```
    (
        <div className="main-layout-container">
          <div className="main-layout-header">
            <Header />
          </div>
          <div className="main-layout-content">
            <Outlet />
          </div>
        </div>
      );
    ```

# Chat-UI

used shadcn

## Home

* FormEvent & FormEventHandler
* use of useState
